
<!-- README.md is generated from README.Rmd. Please edit that file -->

# robinlovelace

This is the source code of my website. I plan to store notes on how to
use it here.

New talk:

``` bash
hugo new  --kind event event/qmul-2022
# or
cp -Rv content/event/casa-2022 content/event/modeshift-2022
cp -Rv content/event/qmul-2022 content/event/2022-mapathon-leeds
```

``` r
file.edit("content/event/modeshift-2022/index.md")

# new blog post:
blogdown::new_post(title = "mastodon", ext = ".Rmd")

blogdown::new_content(path = "software/index.Rmd")

# serve site
blogdown::serve_site()
```

To update publications run:

``` bash
pip3 install academic==0.5.1
# academic import --bibtex static/bibs/robin-lovelaces-publications.bib
academic import --bibtex static/bibs/robin-lovelaces-publications.bib --over
```
