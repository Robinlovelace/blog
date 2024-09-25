---
title: stplanr paper published
author: ~
date: '2019-02-25'
slug: sustainable-transport-planning-with-r-stplanr-paper-published
categories: [r]
tags: [planning, paper]
bibliography: ../../static/bibs/allrefs.bib
---

I am very happy to announce that the paper *stplanr: A package for transport planning* has been published in The R Journal (Lovelace and Ellison 2018) 🎉.

This is the result of around 3 years of work:
it took us (co-author [Richard Ellison](https://business.sydney.edu.au/staff/richard.ellison) and me) over a year to get round to writing the paper after the **stplanr** package was first released on [CRAN](https://cran.r-project.org/package=stplanr) in November 2015 (see its [archive on CRAN](https://cran.r-project.org/src/contrib/Archive/stplanr/) for details); it wasn’t until March 2017 that the paper was formally submitted.

After that, it was in the review process for almost 2 years, before finally being published last week.[^1]
Confusingly, the paper has an official publication date of 2018, despite the second volume of The R Journal in 2018 actually being finished in 2019!
See the [current issue](https://journal.r-project.org/archive/2018-1/) of The R Journal for all papers in this second 2018 volume.
There are some interesting papers in there, not least an explanation of methods for visualising point density by Evangelista and Beskow (2018), and an explanation of *another* pipe (Mount and Zumel 2018).

Instead of going into the details of what the paper says (see the nicely formatted [pdf](https://journal.r-project.org/archive/2018/RJ-2018-053/RJ-2018-053.pdf) for that), I’d like to finish this post by saying a big THANK YOU to the editorial team behind The R Journal for such a high standard (better than many expensive journals I might add, The R Journal is volunteer-run to the best of my knowledge), especially Roger Bivand and John Verzani.

Plans are afoot to build on the moment behind **stplanr**, which originated as a place to store code that I was using to develop the Propensity to Cycle Tool (PCT, hosted at [www.pct.bike](http://www.pct.bike/)) (Lovelace et al. 2017) and make additional, overdue improvements to the package.
For more on that, please head-over to the issue tracker (input welcome) or take a read of the [final section](https://journal.r-project.org/archive/2018/RJ-2018-053/RJ-2018-053.pdf#page=14) of the just-publised paper.

## References

<div id="refs" class="references csl-bib-body hanging-indent">

<div id="ref-evangelista_geospatial_2018" class="csl-entry">

Evangelista, Paul F., and David Beskow. 2018. “Geospatial Point Density.” *The R Journal*.

</div>

<div id="ref-lovelace_stplanr_2018" class="csl-entry">

Lovelace, Robin, and Richard Ellison. 2018. “Stplanr: A Package for Transport Planning.” *The R Journal* 10 (2): 7–23. <https://doi.org/10.32614/RJ-2018-053>.

</div>

<div id="ref-lovelace_propensity_2017" class="csl-entry">

Lovelace, Robin, Anna Goodman, Rachel Aldred, Nikolai Berkoff, Ali Abbas, and James Woodcock. 2017. “The Propensity to Cycle Tool: An Open Source Online System for Sustainable Transport Planning.” *Journal of Transport and Land Use* 10 (1). <https://doi.org/10.5198/jtlu.2016.862>.

</div>

<div id="ref-mount_dotpipe_2018" class="csl-entry">

Mount, John, and Nina Zumel. 2018. “Dot-Pipe: An S3 Extensible Pipe for R.” *The R Journal* 10 (2): 309–16.

</div>

</div>

[^1]: 
    I should say, that it was not the fault of The R Journal’s editorial team that it took so long to publish the paper:
    I asked for it to be put on hold while I completed the mammoth task of re-writing dozens of functions to support sf (see the pull request in which the [`sfr`](https://github.com/ropensci/stplanr/pull/198) branch was merged into `master` for the grizzly details).
