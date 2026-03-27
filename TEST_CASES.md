# Test Cases for Portfolio Application

## 1. Homepage Load
- **Purpose**: Ensure `index.html` is accessible and loads properly.
- **Steps**:
  1. Open `index.html` in browser.
  2. Verify page displays with hero section.
- **Expected**:
  - Page title is `Pritha S | Future Software Developer`.
  - Hero name and tagline are visible.

## 2. Hero Section
- **Purpose**: Verify hero content and typing animation setup.
- **Steps**:
  1. Inspect #hero section content.
  2. Check presence of `Pritha S`, tagline, intro text.
  3. Observe typed text area changes after a few seconds.
- **Expected**:
  - Static texts match project description.
  - `#typing-text` id is present and updates.

## 3. Navigation Links (Smooth Scroll + Section Highlight)
- **Purpose**: Ensure nav jump and highlight of active section.
- **Steps**:
  1. Click each navbar link.
  2. Confirm smooth scroll to the section and active link class toggles.
- **Expected**:
  - Each link scrolls into view and `active` class applies.

## 4. Responsive Layout
- **Purpose**: Confirm mobile & desktop responsiveness.
- **Steps**:
  1. Resize browser to narrow width (<768px).
  2. Click mobile menu toggle.
  3. Validate menu appears and is clickable.
- **Expected**:
  - Menu is hidden on small screens until toggled.
  - Layout stacks correctly and text remains readable.

## 5. About Section
- **Purpose**: Check about statement content.
- **Steps**:
  1. Inspect #about paragraph text.
- **Expected**:
  - Contains mention of AI/ML and problem-solving focus.

## 6. Education Section
- **Purpose**: Confirm education entries are correct.
- **Steps**:
  1. Inspect #education content.
- **Expected**:
  - BE CSE (AI & ML), HSC, SSLC details present.
  - CGPA & percentages match prompt values.

## 7. Skills Section
- **Purpose**: Validate skills list and progress bars.
- **Steps**:
  1. Validate each skill item text.
  2. Verify progress bars have width values.
- **Expected**:
  - Programming (Python, Java), Web Dev (HTML/CSS/JS), Frameworks/Tools.

## 8. Experience and Projects
- **Purpose**: Validate content correctness.
- **Steps**:
  1. Inspect #experience and #projects text.
- **Expected**:
  - Internship role and project descriptions are present.

## 9. Certifications and Contact
- **Purpose**: Validate certification and contact info.
- **Steps**:
  1. Inspect #certifications and #contact sections.
- **Expected**:
  - Oracle Generative AI is listed.
  - Email, phone, location match values.

## 10. JavaScript Functional Test (Automated with Jest)
- **Purpose**: Verify programmatic assertions using `test.js`.
- **Steps**:
  1. `npm install jest jsdom`
  2. `npm test`
- **Expected**:
  - All tests pass.
  - Page title, hero text, about text, education and contact values are validated.
