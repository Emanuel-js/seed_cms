import { achievementType } from './achievementType'
import adminUserType from './adminUserType'
import { awardEventType } from './awardEventType'
import { contactType } from './contactType'
import { deadlineConfigType } from './deadlineConfigType'
import { honorType } from './honorType'
import { resourceSchema } from './mediaResoursesType'
import { mediaItemSchema } from './mediaType'
import membershipSchema from './membershipType'
import { nominationType } from './nominationType'
import { nomineeSchema } from './nomminietype'
import { tributeSchema } from './trebuteType'

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
  deadlineConfigType,
]
