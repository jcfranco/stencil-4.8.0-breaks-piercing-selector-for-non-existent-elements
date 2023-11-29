import { newE2EPage } from '@stencil/core/testing';

describe('my-component', () => {
  it('should not throw error when calling find() on existing or non-existing elements ', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-component></my-component>');

    const exists = await page.find('my-component >>> div');
    expect(exists).not.toBeNull();

    const doesNotExist = await page.find('my-component >>> .doesNotExist');
    expect(doesNotExist).toBeNull();
  });
});
