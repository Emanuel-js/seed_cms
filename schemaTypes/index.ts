import {honorType} from './honorType'
import {resourceSchema} from './mediaResoursesType'
import {mediaItemSchema} from './mediaType'
import {nomineeSchema} from './nomminietype'
import {tributeSchema} from './trebuteType'
import {awardEventType} from './awardEventType'
import {nominationType} from './nominationType'
import adminUserType from './adminUserType'
import membershipSchema from './membershipType'
import {contactType} from './contactType'
import {achievementType} from './achievementType'

export const schemaTypes = [
  honorType,
  mediaItemSchema,
  nomineeSchema,
  tributeSchema,
  resourceSchema,
  awardEventType,
  nominationType,
  adminUserType,
  membershipSchema,
  contactType,
  achievementType,
]
