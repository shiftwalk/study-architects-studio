import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Singletons
import singletonHome from './singletonHome'

// Documents
import projects from './projects'
import press from './press'

// Common
import seo from './common/seo'
import defaultImage from './common/defaultImage'
import childProject from './common/childProject'
import singletonContact from './singletonContact'

export default createSchema({
  name: 'default',
  
  types: schemaTypes.concat([
    singletonHome,
    singletonContact,
    projects,
    press,
    defaultImage,
    childProject,
    seo
  ]),
})
