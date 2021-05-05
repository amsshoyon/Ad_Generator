# Add Template Designs

## Installation

To install gulp globally (Command needed if gulp cli is missing from machine)

```bash
npm install --global gulp-cli
```

Clone and run

```bash
yarn
```

or

```bash
npm install
```

or

```bash
 npm i
```

## Usage

Working Folder Structure:

```python
src
-- projects 1
    -- assets
        -- images
            -- img.png
        -- scripts
            -- main.js
        -- style
            -- style.scss
        -- vendor
    -- index.html
-- projects 2
    -- assets
        -- images
            -- img.png
        -- scripts
            -- main.js
        -- style
            -- style.scss
        -- vendor
    -- index.html
-- index.html
-- style.scss

```

## Codeing Instra

```python

* Add attribute 'inline' to link/script/img tag to inline/incode
i.e.
<img src="./projectFolder/images/img.png" inline />
<link rel="stylesheet" href="adOne/assets/style/index.css" inline/>
<script src="adOne/assets/scripts/main.js" inline></script>

```

\*\* All Build templates will be stored inside ./build folder.

## Run project

```
gulp  // On working environment
```
