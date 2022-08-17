import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Singletons
import singletonHome from './singletonHome'

// Documents
import projects from './projects'

// Common
import seo from './common/seo'
import defaultImage from './common/defaultImage'
import singletonContact from './singletonContact'

export default createSchema({
  name: 'default',
  
  types: schemaTypes.concat([
    singletonHome,
    singletonContact,
    projects,
    defaultImage,
    seo
  ]),
})
