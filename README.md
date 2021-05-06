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
            -- partials
                _colors.scss
                _main.scss
                _reset.scss
                _variable.scss
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
            -- partials
                _colors.scss
                _main.scss
                _reset.scss
                _variable.scss
            -- style.scss
        -- vendor
    -- index.html
-- index.html
-- index.scss

```

## Codeing Instra

```python

* Add attribute 'inline' to link/script/img tag to inline/incode
i.e.
<img src="./projectFolder/images/img.png" inline />
<link rel="stylesheet" href="demoProject/assets/style/index.css" inline/>
<script src="demoProject/assets/scripts/main.js" inline></script>

```

\*\* All Build templates will be stored inside ./dist folder.

## Run project

```
gulp  // On working environment
```
