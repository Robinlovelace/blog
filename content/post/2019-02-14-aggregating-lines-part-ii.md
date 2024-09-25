---
title: Aggregating lines, part II
author: ~
date: '2019-02-14'
slug: aggregating-lines-part-ii
categories: [r]
tags: [stplanr]
---


The [previous post](https://www.robinlovelace.net/2018/10/27/aggregating-lines/) demonstrated a new method to aggregate overlapping lines.
It showed how to combine 2 lines that have an area of overlap.
More excitingly, it led to the creation of a new function in **stplanr**, `overline_sf()`, that lives in the development version of the package.
The purpose of this post is to provide an update on the status of the work to refactor the `overline()` function, in a human friendly alternative to discussion in the relevant GitHub issue: https://github.com/ropensci/stplanr/issues/273

## Set-up

To re-cap, these are the package versions we'll be using in this post (run this line to get the development version of stplanr if you want to reproduce the results):


``` r
remotes::install_github("ropensci/stplanr", ref = "refactor-overline")
```

The library is loaded and the input data from the previous post was loaded as follows:


``` r
library(stplanr)
routes_fast_sf$value = 1
sl = routes_fast_sf[2:3, ]
sl$value = c(2, 5)
overline_sf2 = function(sl, attrib) {
  attrib = "value"
  attrib1 = paste0(attrib, ".1")
  sl_intersection = sf::st_intersection(sl[1, attrib], sl[2, attrib])
  sl_intersection[[attrib]] = sl_intersection[[attrib]] + sl_intersection[[attrib1]]
  sl_intersection[[attrib1]] = NULL
  sl_seg = sf::st_difference(sl[attrib], sf::st_geometry(sl_intersection))
  rnet = rbind(sl_intersection, sl_seg)
  return(rnet)
}
```

This was used as the basis of a demonstration of how overline works, demonstrated in the following code chunk and resulting plot:


``` r
rnet = overline_sf(sl, "value")
plot(rnet["value"], lwd = rnet$value)
plot(sl["value"], lwd = sl$value, col = sf::sf.colors(2, alpha = 0.5))
```


## Dealing with many lines

The above method worked with 2 lines but how can it be used to process many lines?
Clearly the same function could be implemented on another line, but it would need to work from the 3 lines of the newly created `rnet` object rather than the original 2 routes.
Let's introduce a 3^rd^ route into the equation, that does not intersect with this newly created **rnet** object:


``` r
sl3 = routes_fast_sf[4, ]
rnet = overline_sf2(rnet, sl)
plot(rnet$geometry, lwd = rnet$value)
plot(sl3, col = "red", add = TRUE)
```

In this case the method of adding to rnet is simple: just add the entirety of the line to the `rnet` object:


``` r
attrib = "value"
rnet3 = rbind(rnet, sl3[attrib])
plot(rnet3$geometry, lwd = rnet3$value)
```

This works fine.
In fact it works better than the original `overline` function because it does not add the value of the existing thickest line in the previous figure onto the new line, a problem associated with `overline.sp()` that is illustrated in the following code chunk and resulting figure:


``` r
sl1_3 = as(routes_fast_sf[2:4, ], "Spatial")
rnet3_sp = overline(sl1_3, attrib = "value")
plot(rnet3_sp, lwd = rnet3_sp$value)
```

A question that arises from the previous example is this: what if the next line intersects with the route network?
It is no longer possible to simply add together two values.
This can be illustrated by introducing 2 more lines:


``` r
sl4_5 = routes_fast_sf[5:6, ]
plot(rnet3$geometry, lwd = rnet3$value)
plot(sl4_5$geometry, col = "red", add = TRUE)
```

Both the new lines intersect with the newest part of the route network.
This means that we cannot simply `rbind()` them to it as we did for `sl3`.
They need to be dealt with separately.

Before we deal with them, it's worth taking some time to consider what we mean by 'intersect'.
Intersection is actuall a specific type of geometric relation between 2 sets of features.
We can see the type of relation by using the function `st_relate()`:


``` r
relations = sf::st_relate(sl4_5, rnet3)
relations
unique(as.vector(relations))
```

This shows us something important: although 2 elements (1 and 4) of `rnet` relate *in some way* to the new lines, only the 4^th^ feature has a linear, overlapping relation with it.
That relation is `1F1F00102` which, as far as I can tell, is not a [named spatial predicate](https://en.wikipedia.org/wiki/DE-9IM#Spatial_predicates) (`FF1F00102` means 'intersects and touches' but does not have a linear overlap).
This relation is what we need to decide whether or not to simply bind a new feature to the growing `rnet`, whether we need to break it up (or at least part of it) into smaller lines before doing so (it also raises the wider question of which order should we do things).

In the simple case of *whether* to simply bind the next line (4) onto `rnet3` the answer is simple now we know the string code associated with linear overlaps.
First we'll test it on the previous example of `sl3` and the original `rnet` composed of 3 features:


``` r
relate_rnet_3 = sf::st_relate(rnet, sl3, pattern = "1F1F00102")
relate_rnet_3
any(lengths(relate_rnet_3))
```

The `FALSE` meant there was no linear overlaps. So we simply used `rbind()`.
When we ask the same question of `rnet3` and `sl4`, however, the answer is `TRUE`:


``` r
sl4 = sl4_5[1, ]
relate_rnet_4 = sf::st_relate(rnet3, sl4, pattern = "1F1F00102")
relate_rnet_4
any(lengths(relate_rnet_4))
```

How to proceed? We need to avoid `rnet` objects containing any overlapping lines.
Because `sl4` overlaps with part of `rnet3` we will need to remove the overlapping line, run the `overline_sf2()` function, and then re-combine the result with the pre-existing route network object.
We can split-up the `rnet3` object into overlapping and non-overlapping features as follows:


``` r
sel_overlaps = lengths(relate_rnet_4) > 0
rnet_overlaps = rnet3[sel_overlaps, ]
rnet3_tmp = rnet3[!sel_overlaps, ]
```

We can check that there is only one overlapping feature as follows:


``` r
nrow(rnet_overlaps)
```

And we can proceed to join the two features together using our new function:


``` r
rnet_overlaps4 = overline_sf2(rbind(rnet_overlaps, sl4[attrib]))
```

Adding this back to the `rnet3` object results in an larger `rnet` object incorporating all the `value` and `geometry` column data we have so far:


``` r
rnet = rbind(rnet3_tmp, rnet_overlaps4)
plot(rnet$geometry, lwd = rnet$value)
```

The information provided so far informed the creation of the following function:


``` r
stplanr::overline_sf
```

This function made use of the slightly simpler individual route-joining function, and associated helper functions:


``` r
stplanr::overline_sf2

stplanr::overlaps
stplanr::to_linestring
```

Aside from being clunky, this approach has the additional flaw of not working.
It works fine for lines 2 to 6 in `routes_fast_sf`, as illustrated below.


``` r
r6 = routes_fast_sf[2:6, ]
rnet6 = overline_sf(r6, attrib = "value")
plot(rnet6)
```

A problem arises when we try to run the same command on the same data, but with one more line added.
That will be the topic of the next post on aggregating lines to form route networks, which will also introduce a new function `overline2()`, developed by my colleague [Malcolm Morgan](https://environment.leeds.ac.uk/transport/staff/964/dr-malcolm-morgan).

## Another benchmark

To provide a taster of the new function, let's see it in action in a benchmark on this latest route network consisting of the five lines illustrated in the previous plot.
Again, we use `bench::mark()` to benchmark each approach:


``` r
bench::mark(check = FALSE,
  overline = stplanr::overline(r6, "value"),
  overline_sf = stplanr::overline_sf(r6, "value"),
  overline2 = stplanr::overline2(r6, "value")
)
```

Again the results are not Earth-shattering and should be taken with a large pinch of salt: performance should not be evaluated against these relatively tiny datasets, but against the scale of datasets that the functions were designed to handle: city scale route networks involving thousands of overlapping lines.
The same principle is used in the benchmarking section of the [h2oai website](https://h2oai.github.io/db-benchmark/): focus on benchmarks that apply to the datasets you will actually be using.
In this case, my hypothesis is that the geometric functions `overline()` and `overline_sf()` will perform disproportionately badly as the size of the input dataset grows (to be tested).
Still, it is interesting to note that the new `overline2()` function uses way more memory than the other functions.
More next time!
