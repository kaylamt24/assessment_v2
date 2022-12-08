
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:4005/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Check that clicking on the Draw butto displays the div with id ="choices', async () => {
    await driver.findElement(By.id('draw')).click()
    const draw = await driver.findElement(By.id('choices'))
    const displayed = await draw.isDisplayed()
    expect(displayed).toBeTruthy

    await driver.sleep(2000)

})

test('click see all button displays div with id of all-bots', async () => {
    await driver.findElement(By.id('see-all')).click()
    const allBots = await driver.findElement(By.id('all-bots'))
    const displayed = await allBots.isDisplayed()
    expect(displayed).toBeTruthy

    await driver.sleep(2000)
})
