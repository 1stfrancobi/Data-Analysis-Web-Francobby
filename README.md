# Francis Cobbinah — Data Analysis Portfolio

A personal portfolio showcasing data analysis, machine-learning
research, visualization and geospatial project contributions.

The website adapts the dark background, purple accents, project
cards and timeline layout of the supplied open-source portfolio.

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript

No package installation, framework or build process is required.

## Files

| File | Purpose |
|---|---|
| index.html | Portfolio content and expandable project overviews |
| styles.css | Theme, layouts and responsive styling |
| script.js | Mobile navigation and project-link behaviour |
| README.md | Setup and maintenance instructions |
| LICENSE | Original template license |
| images/ | Project screenshots |

## Required Images

Place these files inside the images folder:

- Bike_Share_Dashboard.png
- Data_Analysis_with_Python.png
- Rplot.png

Use the exact filenames and capitalization shown above.

The homepage uses an FC monogram. It does not require a portrait.

## Website Sections

### About

Introduces Francis Cobbinah’s background in data analysis,
geomatic engineering, research and technical reporting.

### Selected Projects

- GRACE/GRACE-FO satellite-gravity gap filling
- Bike-sharing performance dashboard
- Healthcare facility suitability in Greater Accra
- Exploratory visualizations with Python and R

Each project card links to an expandable overview on the same page.

### Project Contributions

Presents responsibilities and outputs from:

- Bauxite mapping and spatial-data management at GIADEC
- Road construction measurement with Associated Consultants Ltd
- Mine surveying and monitoring at Perseus Mining Ghana Limited
- Cadastral data processing and mapping with Jemem Surveys

Descriptions focus on contributions without placement labels.
They distinguish supported activities from work performed directly.

### Education

- BSc Geomatic Engineering, University of Mines and Technology
- GIS, Mapping, and Spatial Analysis, University of Toronto via Coursera
- AI Career Essentials, ALX

### Contact

Provides email, LinkedIn and GitHub links.

The website has no contact-form backend and does not store messages.
The email link opens the visitor’s configured email application.

## Local Preview

Open index.html directly in a browser.

Alternatively, open a terminal in the website folder and run:

    python -m http.server 8000

Then visit:

    http://localhost:8000

Stop the server with Ctrl+C when finished.

## Customization

### Change Text

Edit the relevant sections in index.html.

### Change Colours

Update the variables in the :root block of styles.css.

### Replace Project Images

Replace files in images/ or update the corresponding image paths
in index.html. Update alternative text when the image changes.

### Add a Project

1. Duplicate an existing project-card article.
2. Update its title, description and tool tags.
3. Give its link a unique fragment, such as #new-project.
4. Duplicate a case-study details element.
5. Set its id to the same value, such as new-project.
6. Add the project’s question, contribution, outputs and limitations.

The JavaScript opens the matching overview when its link is followed.

### Update Contact Details

Change the email and profile links in the contact section.

### Update Education or Project Contributions

Edit the education-card or timeline-entry elements in index.html.

## Accessibility Features

- Semantic HTML structure
- Skip-to-content link
- Descriptive image alternative text
- Visible keyboard focus
- Native expandable project sections
- Mobile menu with an expanded-state indicator
- Escape-key support for closing the mobile menu
- Reduced-motion support

Without JavaScript, navigation links and project disclosures remain
available. Automatic opening of a project from its link requires
JavaScript.

## Content and Evidence

- Dashboard screenshots are static previews, not embedded dashboards.
- Research predictions are estimates, not new satellite measurements.
- Restaurant counts describe the analysed sample.
- The Python histogram is presented as a visualization example.
- Unverified model scores and business impacts are not claimed.
- The supplied restaurant chart has a cropped title; replace it
  with a complete export when available.

## Checks Before Publishing

- Confirm all images load.
- Test every navigation and project link.
- Open and close each project overview.
- Test the mobile menu and Escape key.
- Navigate using the keyboard.
- Review narrow-screen and desktop layouts.
- Check readability at increased browser zoom.
- Confirm email and social links are correct.
- Verify that all project descriptions accurately reflect your work.

This version has not yet been browser-tested or published.

## Template Attribution

Adapted from the supplied
“Open-Source-and-Fully-Customizable-Data-Portfolio-for-Analysts”
template.

The original template includes a CC0 1.0 Universal dedication.
Retain its LICENSE file.

The template’s dedication does not automatically establish reuse
rights for separately supplied photographs, screenshots or other
third-party materials.
