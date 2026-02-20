🛒 eBay Related Best Seller – QA Automation Framework
📌 Project Overview

This project validates the “Related Best Seller Products” feature on the eBay product page using Playwright.

The automation framework ensures:

Related products belong to the same category.

Products fall within defined price range.

Maximum of 6 products displayed.

Main product is excluded.

Navigation works correctly.

🛠 Tech Stack

Playwright

TypeScript

Node.js

Page Object Model (POM)

GitHub

📂 Project Structure
ecommerce-playwright/
│
├── tests/
│   ├── relatedProducts.spec.ts
│
├── pages/
│   ├── ProductPage.ts
│
├── utils/
│   ├── testData.ts
│
├── fixtures/
│   ├── baseFixture.ts
│
├── playwright.config.ts
├── package.json
├── README.md

🚀 Setup Instructions
1️⃣ Install Dependencies
npm install

2️⃣ Install Playwright Browsers
npx playwright install

3️⃣ Run Tests
npx playwright test

4️⃣ View HTML Report
npx playwright show-report

🧪 Test Coverage

✔ Verify related products displayed
✔ Verify max 6 products
✔ Verify same category
✔ Verify price range validation
✔ Verify main product excluded
✔ Negative scenarios
✔ Navigation validation

📊 Reporting

HTML report generated automatically.

Screenshot on failure enabled.

Trace collection enabled.

🔄 CI/CD (Optional Enhancement)

GitHub Actions workflow can be added to run automation on each pull request.

👩‍💻 Author

Madushika Ranapana
QA Automation Engineer

✅ 3️⃣ CLEAN GITHUB REPO STRUCTURE (Professional Level)

This is what will impress reviewers:

ebay-related-bestseller-qa/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── pages/
│   ├── BasePage.ts
│   ├── HomePage.ts
│   └── ProductPage.ts
│
├── tests/
│   ├── related-products/
│   │   ├── positive.spec.ts
│   │   ├── negative.spec.ts
│
├── utils/
│   ├── constants.ts
│   ├── helpers.ts
│
├── test-data/
│   ├── productData.json
│
├── playwright.config.ts
├── package.json
├── tsconfig.json
├── README.md




