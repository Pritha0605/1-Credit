const fs = require('fs');
const { JSDOM } = require('jsdom');

describe('Portfolio page basic checks', () => {
  let dom;

  beforeAll(() => {
    const html = fs.readFileSync('index.html', 'utf-8');
    dom = new JSDOM(html);
  });

  test('has correct title', () => {
    expect(dom.window.document.title).toBe('Pritha S | Future Software Developer');
  });

  test('hero section contains name and tagline', () => {
    const hero = dom.window.document.querySelector('#hero');
    expect(hero).not.toBeNull();
    expect(hero.textContent).toContain('Pritha S');
    expect(hero.textContent).toContain('Future Software Developer | Problem Solving and Logical Building');
  });

  test('about section content is present', () => {
    const about = dom.window.document.querySelector('#about p');
    expect(about.textContent).toContain('Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning');
  });

  test('education section has BE and SSLC entries', () => {
    const education = dom.window.document.querySelector('#education');
    expect(education.textContent).toMatch(/BE CSE \(AI & ML\)/);
    expect(education.textContent).toMatch(/SSLC/);
    expect(education.textContent).toMatch(/CGPA: 8.89/);
  });

  test('contact section has email and phone', () => {
    const contact = dom.window.document.querySelector('#contact');
    expect(contact.textContent).toContain('prithasakthivel07@gmail.com');
    expect(contact.textContent).toContain('8667270234');
  });
});
