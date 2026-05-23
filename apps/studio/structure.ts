import {type StructureBuilder, type StructureResolver} from 'sanity/structure'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

const excluded = ['project']

export const deskStructure: StructureResolver = (S: StructureBuilder, context) =>
  S.list()
    .title('Content')
    .items([
      orderableDocumentListDeskItem({type: 'project', S, context}),

      ...S.documentTypeListItems().filter((item) => !excluded.includes(item.getId() || '')),
    ])
