const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const AboutPage = require('../pages/AboutPage');
const ContactPage = require('../pages/ContactPage');
const ServicesPage = require('../pages/ServicesPage');
const BlogPage = require('../pages/BlogPage');

test.describe('Website Navigation', () => {
  test('Navigate to Home Page', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate('http://example.com');
    await homePage.navigateToHome();
    expect(await homePage.getTitle()).toBe('Home');
  });

  test('Navigate to About Page', async ({ page }) => {
    const aboutPage = new AboutPage(page);
    await aboutPage.navigate('http://example.com');
    await aboutPage.navigateToAbout();
    expect(await aboutPage.getTitle()).toBe('About Us');
  });

  test('Navigate to Contact Page', async ({ page }) => {
    const contactPage = new ContactPage(page);
    await contactPage.navigate('http://example.com');
    await contactPage.navigateToContact();
    expect(await contactPage.getTitle()).toBe('Contact');
  });

  test('Navigate to Services Page', async ({ page }) => {
    const servicesPage = new ServicesPage(page);
    await servicesPage.navigate('http://example.com');
    await servicesPage.navigateToServices();
    expect(await servicesPage.getTitle()).toBe('Services');
  });

  test('Navigate to Blog Page', async ({ page }) => {
    const blogPage = new BlogPage(page);
    await blogPage.navigate('http://example.com');
    await blogPage.navigateToBlog();
    expect(await blogPage.getTitle()).toBe('Blog');
  });
});