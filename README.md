# Francis Cobbinah — Data Analysis Portfolio

A personal portfolio presenting data analysis, machine-learning
research, visualization and geospatial project contributions.

The design uses a dark background, purple accents, rounded project
cards, expandable project overviews and a circular profile photograph.

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript

No framework, package installation or build process is required.

## Files

| File | Purpose |
|---|---|
| index.html | Portfolio content and project overviews |
| styles.css | Theme, circular photograph and responsive layouts |
| script.js | Mobile navigation and project-link behaviour |
| README.md | Setup and maintenance instructions |
| LICENSE | Original template license |
| images/ | Profile photograph and project screenshots |

## Required Images

Place these files inside the images folder:

- profile.jpg
- Bike_Share_Dashboard.png
- Data_Analysis_with_Python.png
- Rplot.png

Filenames and capitalization must match the HTML paths exactly.

## Profile Photograph

The photograph is displayed inside the purple circle in the hero.

Its default path in index.html is:

    images/profile.jpg

If the photograph has another filename or extension, update the
image source in index.html to match.

The CSS uses object-fit: cover to fill the circle without stretching
the photograph. Parts of the image may be cropped.

To adjust the visible area, edit object-position in this rule:

    .profile-photo img {
      object-position: center;
    }

For example, center 30% shifts the visible area toward the upper
part of a portrait.

The small FC navigation logo and browser favicon remain separate
from the profile photograph.

## Website Sections

- About
- Selected projects
- Project contributions
- Education
- Contact

## Selected Projects

- GRACE/GRACE-FO satellite-gravity gap filling
- Bike-sharing performance dashboard
- Healthcare facility suitability in Greater Accra
- Exploratory visualizations with Python and R

Project cards link to expandable overviews on the same page.

## Project Contributions

Project descriptions cover:

- Bauxite mapping and spatial-data management at GIADEC
- Construction measurement with Associated Consultants Ltd
- Mine surveying and monitoring at Perseus Mining Ghana Limited
- Cadastral data processing and mapping with Jemem Surveys

Descriptions focus on contributions and outputs without placement
labels, while preserving distinctions between supported activities
and work performed directly.

## Preview

Open index.html in a browser.

Alternatively, run this command inside the website folder:

    python -m http.server 8000

Then visit:

    http://localhost:8000

Stop the local server with Ctrl+C.

## Customization

### Text

Edit the relevant sections in index.html.

### Colours

Change the variables in the :root block of styles.css.

### Project Images

Replace the files in images/ or update their paths in index.html.
Update alternative text if the content of an image changes.

### Add a Project

1. Duplicate a project-card article.
2. Update its title, description and tags.
3. Link it to a unique fragment such as #new-project.
4. Duplicate a case-study details element.
5. Give that details element the matching id: new-project.
6. Add the question, contribution, outputs and limitations.

### Contact Details

Update the email and social links in the contact section.

The email link opens the visitor's configured email application.
There is no contact-form backend.

## Accessibility

- Semantic HTML sections
- Skip-to-content link
- Descriptive image alternative text
- Visible keyboard focus
- Native expandable project sections
- Mobile menu with an expanded-state indicator
- Escape-key support for closing the mobile menu
- Reduced-motion support

Without JavaScript, navigation and project disclosures remain
available. Automatic opening from project links requires JavaScript.

## Content Notes

- Dashboard images are static previews.
- Research predictions are estimates, not new satellite measurements.
- Restaurant counts describe the analysed sample.
- The Python histogram is a visualization example.
- Unverified model scores and business impacts are not claimed.
- The supplied restaurant chart has a cropped title; replace it
  with a complete export when available.

## Checks Before Publishing

- Confirm the profile photograph loads and its crop is suitable.
- Confirm all project screenshots load.
- Test navigation and project links.
- Open and close the project overviews.
- Check the mobile menu and Escape key.
- Navigate using the keyboard.
- Review desktop and narrow-screen layouts.
- Confirm contact links and project descriptions are accurate.

This update has not been verified against the locally added
profile photograph or tested in a browser.

## Template Attribution

Adapted from the supplied
Open-Source-and-Fully-Customizable-Data-Portfolio-for-Analysts
template.

Retain the original template's LICENSE file.
