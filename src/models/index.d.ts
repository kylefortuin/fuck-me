import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type PostsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AuthorsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Posts {
  readonly id: string;
  readonly Post?: string | null;
  readonly authorsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Posts, PostsMetaData>);
  static copyOf(source: Posts, mutator: (draft: MutableModel<Posts, PostsMetaData>) => MutableModel<Posts, PostsMetaData> | void): Posts;
}

export declare class Authors {
  readonly id: string;
  readonly First_name?: string | null;
  readonly Last_name?: string | null;
  readonly Posts?: (Posts | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Authors, AuthorsMetaData>);
  static copyOf(source: Authors, mutator: (draft: MutableModel<Authors, AuthorsMetaData>) => MutableModel<Authors, AuthorsMetaData> | void): Authors;
}