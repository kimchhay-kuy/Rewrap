import fileTest from './fileTest'
import makeTest from './makeTest'


suite("Languages", () => 
{
  const languageTest = makeTest(() => testExtension)
  
  languageTest('c')
  languageTest('coffee')
  languageTest('cs')
  languageTest('elm')
  languageTest('go')
  languageTest('js')
  languageTest('rb')
  languageTest('xml')
})


function testExtension() 
{
  const ext = this.test.title
  
  return fileTest('languages/data.' + ext, 'languages/expected.80.' + ext)
}