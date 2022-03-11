export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  json: any;
  timestamp: any;
  timestamptz: any;
  user_role: any;
};

export type AttachedFile = {
  content: Scalars['String'];
  contentId: Scalars['String'];
  disposition: Scalars['String'];
  filename: Scalars['String'];
  type: Scalars['String'];
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

export type NotificationResponse = {
  __typename?: 'NotificationResponse';
  isSent: Scalars['Boolean'];
};

export type NotificationType =
  | 'EMAIL'
  | 'SMS';

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** mutation root */
export type MutationRoot = {
  __typename?: 'mutation_root';
  /** delete data from the table: "organizations" */
  delete_organizations?: Maybe<OrganizationsMutationResponse>;
  /** delete single row from the table: "organizations" */
  delete_organizations_by_pk?: Maybe<Organizations>;
  /** delete data from the table: "otps" */
  delete_otps?: Maybe<OtpsMutationResponse>;
  /** delete single row from the table: "otps" */
  delete_otps_by_pk?: Maybe<Otps>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<UsersMutationResponse>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "organizations" */
  insert_organizations?: Maybe<OrganizationsMutationResponse>;
  /** insert a single row into the table: "organizations" */
  insert_organizations_one?: Maybe<Organizations>;
  /** insert data into the table: "otps" */
  insert_otps?: Maybe<OtpsMutationResponse>;
  /** insert a single row into the table: "otps" */
  insert_otps_one?: Maybe<Otps>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<UsersMutationResponse>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  sendNotifications?: Maybe<NotificationResponse>;
  /** update data of the table: "organizations" */
  update_organizations?: Maybe<OrganizationsMutationResponse>;
  /** update single row of the table: "organizations" */
  update_organizations_by_pk?: Maybe<Organizations>;
  /** update data of the table: "otps" */
  update_otps?: Maybe<OtpsMutationResponse>;
  /** update single row of the table: "otps" */
  update_otps_by_pk?: Maybe<Otps>;
  /** update data of the table: "users" */
  update_users?: Maybe<UsersMutationResponse>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type MutationRootDeleteOrganizationsArgs = {
  where: OrganizationsBoolExp;
};


/** mutation root */
export type MutationRootDeleteOrganizationsByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeleteOtpsArgs = {
  where: OtpsBoolExp;
};


/** mutation root */
export type MutationRootDeleteOtpsByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeleteUsersArgs = {
  where: UsersBoolExp;
};


/** mutation root */
export type MutationRootDeleteUsersByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootInsertOrganizationsArgs = {
  objects: Array<OrganizationsInsertInput>;
  on_conflict?: InputMaybe<OrganizationsOnConflict>;
};


/** mutation root */
export type MutationRootInsertOrganizationsOneArgs = {
  object: OrganizationsInsertInput;
  on_conflict?: InputMaybe<OrganizationsOnConflict>;
};


/** mutation root */
export type MutationRootInsertOtpsArgs = {
  objects: Array<OtpsInsertInput>;
  on_conflict?: InputMaybe<OtpsOnConflict>;
};


/** mutation root */
export type MutationRootInsertOtpsOneArgs = {
  object: OtpsInsertInput;
  on_conflict?: InputMaybe<OtpsOnConflict>;
};


/** mutation root */
export type MutationRootInsertUsersArgs = {
  objects: Array<UsersInsertInput>;
  on_conflict?: InputMaybe<UsersOnConflict>;
};


/** mutation root */
export type MutationRootInsertUsersOneArgs = {
  object: UsersInsertInput;
  on_conflict?: InputMaybe<UsersOnConflict>;
};


/** mutation root */
export type MutationRootSendNotificationsArgs = {
  attachments?: InputMaybe<Array<AttachedFile>>;
  bcc?: InputMaybe<Array<Scalars['String']>>;
  cc?: InputMaybe<Array<Scalars['String']>>;
  email_custom_message?: InputMaybe<Scalars['String']>;
  email_subject?: InputMaybe<Scalars['String']>;
  emails?: InputMaybe<Array<Scalars['String']>>;
  phones?: InputMaybe<Array<Scalars['String']>>;
  sms_text?: InputMaybe<Scalars['String']>;
  template_body?: InputMaybe<Scalars['json']>;
  template_id?: InputMaybe<Scalars['String']>;
  type: NotificationType;
};


/** mutation root */
export type MutationRootUpdateOrganizationsArgs = {
  _inc?: InputMaybe<OrganizationsIncInput>;
  _set?: InputMaybe<OrganizationsSetInput>;
  where: OrganizationsBoolExp;
};


/** mutation root */
export type MutationRootUpdateOrganizationsByPkArgs = {
  _inc?: InputMaybe<OrganizationsIncInput>;
  _set?: InputMaybe<OrganizationsSetInput>;
  pk_columns: OrganizationsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateOtpsArgs = {
  _inc?: InputMaybe<OtpsIncInput>;
  _set?: InputMaybe<OtpsSetInput>;
  where: OtpsBoolExp;
};


/** mutation root */
export type MutationRootUpdateOtpsByPkArgs = {
  _inc?: InputMaybe<OtpsIncInput>;
  _set?: InputMaybe<OtpsSetInput>;
  pk_columns: OtpsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateUsersArgs = {
  _inc?: InputMaybe<UsersIncInput>;
  _set?: InputMaybe<UsersSetInput>;
  where: UsersBoolExp;
};


/** mutation root */
export type MutationRootUpdateUsersByPkArgs = {
  _inc?: InputMaybe<UsersIncInput>;
  _set?: InputMaybe<UsersSetInput>;
  pk_columns: UsersPkColumnsInput;
};

/** column ordering options */
export type OrderBy =
  /** in ascending order, nulls last */
  | 'asc'
  /** in ascending order, nulls first */
  | 'asc_nulls_first'
  /** in ascending order, nulls last */
  | 'asc_nulls_last'
  /** in descending order, nulls first */
  | 'desc'
  /** in descending order, nulls first */
  | 'desc_nulls_first'
  /** in descending order, nulls last */
  | 'desc_nulls_last';

/** columns and relationships of "organizations" */
export type Organizations = {
  __typename?: 'organizations';
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamptz']>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: UsersAggregate;
};


/** columns and relationships of "organizations" */
export type OrganizationsUsersArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


/** columns and relationships of "organizations" */
export type OrganizationsUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};

/** aggregated selection of "organizations" */
export type OrganizationsAggregate = {
  __typename?: 'organizations_aggregate';
  aggregate?: Maybe<OrganizationsAggregateFields>;
  nodes: Array<Organizations>;
};

/** aggregate fields of "organizations" */
export type OrganizationsAggregateFields = {
  __typename?: 'organizations_aggregate_fields';
  avg?: Maybe<OrganizationsAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<OrganizationsMaxFields>;
  min?: Maybe<OrganizationsMinFields>;
  stddev?: Maybe<OrganizationsStddevFields>;
  stddev_pop?: Maybe<OrganizationsStddevPopFields>;
  stddev_samp?: Maybe<OrganizationsStddevSampFields>;
  sum?: Maybe<OrganizationsSumFields>;
  var_pop?: Maybe<OrganizationsVarPopFields>;
  var_samp?: Maybe<OrganizationsVarSampFields>;
  variance?: Maybe<OrganizationsVarianceFields>;
};


/** aggregate fields of "organizations" */
export type OrganizationsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<OrganizationsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type OrganizationsAvgFields = {
  __typename?: 'organizations_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "organizations". All fields are combined with a logical 'AND'. */
export type OrganizationsBoolExp = {
  _and?: InputMaybe<Array<OrganizationsBoolExp>>;
  _not?: InputMaybe<OrganizationsBoolExp>;
  _or?: InputMaybe<Array<OrganizationsBoolExp>>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  deleted_at?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
  users?: InputMaybe<UsersBoolExp>;
};

/** unique or primary key constraints on table "organizations" */
export type OrganizationsConstraint =
  /** unique or primary key constraint */
  | 'organizations_pkey';

/** input type for incrementing numeric columns in table "organizations" */
export type OrganizationsIncInput = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "organizations" */
export type OrganizationsInsertInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  users?: InputMaybe<UsersArrRelInsertInput>;
};

/** aggregate max on columns */
export type OrganizationsMaxFields = {
  __typename?: 'organizations_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type OrganizationsMinFields = {
  __typename?: 'organizations_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "organizations" */
export type OrganizationsMutationResponse = {
  __typename?: 'organizations_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Organizations>;
};

/** input type for inserting object relation for remote table "organizations" */
export type OrganizationsObjRelInsertInput = {
  data: OrganizationsInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<OrganizationsOnConflict>;
};

/** on_conflict condition type for table "organizations" */
export type OrganizationsOnConflict = {
  constraint: OrganizationsConstraint;
  update_columns?: Array<OrganizationsUpdateColumn>;
  where?: InputMaybe<OrganizationsBoolExp>;
};

/** Ordering options when selecting data from "organizations". */
export type OrganizationsOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  deleted_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  users_aggregate?: InputMaybe<UsersAggregateOrderBy>;
};

/** primary key columns input for table: organizations */
export type OrganizationsPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "organizations" */
export type OrganizationsSelectColumn =
  /** column name */
  | 'created_at'
  /** column name */
  | 'deleted_at'
  /** column name */
  | 'id'
  /** column name */
  | 'name'
  /** column name */
  | 'updated_at';

/** input type for updating data in table "organizations" */
export type OrganizationsSetInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type OrganizationsStddevFields = {
  __typename?: 'organizations_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type OrganizationsStddevPopFields = {
  __typename?: 'organizations_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type OrganizationsStddevSampFields = {
  __typename?: 'organizations_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type OrganizationsSumFields = {
  __typename?: 'organizations_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "organizations" */
export type OrganizationsUpdateColumn =
  /** column name */
  | 'created_at'
  /** column name */
  | 'deleted_at'
  /** column name */
  | 'id'
  /** column name */
  | 'name'
  /** column name */
  | 'updated_at';

/** aggregate var_pop on columns */
export type OrganizationsVarPopFields = {
  __typename?: 'organizations_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type OrganizationsVarSampFields = {
  __typename?: 'organizations_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type OrganizationsVarianceFields = {
  __typename?: 'organizations_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "otps" */
export type Otps = {
  __typename?: 'otps';
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at: Scalars['timestamp'];
  id: Scalars['Int'];
  otp_hash: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  user: Users;
  user_id: Scalars['Int'];
};

/** aggregated selection of "otps" */
export type OtpsAggregate = {
  __typename?: 'otps_aggregate';
  aggregate?: Maybe<OtpsAggregateFields>;
  nodes: Array<Otps>;
};

/** aggregate fields of "otps" */
export type OtpsAggregateFields = {
  __typename?: 'otps_aggregate_fields';
  avg?: Maybe<OtpsAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<OtpsMaxFields>;
  min?: Maybe<OtpsMinFields>;
  stddev?: Maybe<OtpsStddevFields>;
  stddev_pop?: Maybe<OtpsStddevPopFields>;
  stddev_samp?: Maybe<OtpsStddevSampFields>;
  sum?: Maybe<OtpsSumFields>;
  var_pop?: Maybe<OtpsVarPopFields>;
  var_samp?: Maybe<OtpsVarSampFields>;
  variance?: Maybe<OtpsVarianceFields>;
};


/** aggregate fields of "otps" */
export type OtpsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<OtpsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "otps" */
export type OtpsAggregateOrderBy = {
  avg?: InputMaybe<OtpsAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<OtpsMaxOrderBy>;
  min?: InputMaybe<OtpsMinOrderBy>;
  stddev?: InputMaybe<OtpsStddevOrderBy>;
  stddev_pop?: InputMaybe<OtpsStddevPopOrderBy>;
  stddev_samp?: InputMaybe<OtpsStddevSampOrderBy>;
  sum?: InputMaybe<OtpsSumOrderBy>;
  var_pop?: InputMaybe<OtpsVarPopOrderBy>;
  var_samp?: InputMaybe<OtpsVarSampOrderBy>;
  variance?: InputMaybe<OtpsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "otps" */
export type OtpsArrRelInsertInput = {
  data: Array<OtpsInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<OtpsOnConflict>;
};

/** aggregate avg on columns */
export type OtpsAvgFields = {
  __typename?: 'otps_avg_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "otps" */
export type OtpsAvgOrderBy = {
  id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "otps". All fields are combined with a logical 'AND'. */
export type OtpsBoolExp = {
  _and?: InputMaybe<Array<OtpsBoolExp>>;
  _not?: InputMaybe<OtpsBoolExp>;
  _or?: InputMaybe<Array<OtpsBoolExp>>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  expires_at?: InputMaybe<TimestampComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  otp_hash?: InputMaybe<StringComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  user_id?: InputMaybe<IntComparisonExp>;
};

/** unique or primary key constraints on table "otps" */
export type OtpsConstraint =
  /** unique or primary key constraint */
  | 'otps_pkey';

/** input type for incrementing numeric columns in table "otps" */
export type OtpsIncInput = {
  id?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "otps" */
export type OtpsInsertInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  expires_at?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  otp_hash?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  user_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type OtpsMaxFields = {
  __typename?: 'otps_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  otp_hash?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "otps" */
export type OtpsMaxOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  expires_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  otp_hash?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type OtpsMinFields = {
  __typename?: 'otps_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  otp_hash?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "otps" */
export type OtpsMinOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  expires_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  otp_hash?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "otps" */
export type OtpsMutationResponse = {
  __typename?: 'otps_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Otps>;
};

/** on_conflict condition type for table "otps" */
export type OtpsOnConflict = {
  constraint: OtpsConstraint;
  update_columns?: Array<OtpsUpdateColumn>;
  where?: InputMaybe<OtpsBoolExp>;
};

/** Ordering options when selecting data from "otps". */
export type OtpsOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  expires_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  otp_hash?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: otps */
export type OtpsPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "otps" */
export type OtpsSelectColumn =
  /** column name */
  | 'created_at'
  /** column name */
  | 'expires_at'
  /** column name */
  | 'id'
  /** column name */
  | 'otp_hash'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'user_id';

/** input type for updating data in table "otps" */
export type OtpsSetInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  expires_at?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  otp_hash?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type OtpsStddevFields = {
  __typename?: 'otps_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "otps" */
export type OtpsStddevOrderBy = {
  id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type OtpsStddevPopFields = {
  __typename?: 'otps_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "otps" */
export type OtpsStddevPopOrderBy = {
  id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type OtpsStddevSampFields = {
  __typename?: 'otps_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "otps" */
export type OtpsStddevSampOrderBy = {
  id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate sum on columns */
export type OtpsSumFields = {
  __typename?: 'otps_sum_fields';
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "otps" */
export type OtpsSumOrderBy = {
  id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** update columns of table "otps" */
export type OtpsUpdateColumn =
  /** column name */
  | 'created_at'
  /** column name */
  | 'expires_at'
  /** column name */
  | 'id'
  /** column name */
  | 'otp_hash'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'user_id';

/** aggregate var_pop on columns */
export type OtpsVarPopFields = {
  __typename?: 'otps_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "otps" */
export type OtpsVarPopOrderBy = {
  id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type OtpsVarSampFields = {
  __typename?: 'otps_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "otps" */
export type OtpsVarSampOrderBy = {
  id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type OtpsVarianceFields = {
  __typename?: 'otps_variance_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "otps" */
export type OtpsVarianceOrderBy = {
  id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

export type QueryRoot = {
  __typename?: 'query_root';
  /** fetch data from the table: "organizations" */
  organizations: Array<Organizations>;
  /** fetch aggregated fields from the table: "organizations" */
  organizations_aggregate: OrganizationsAggregate;
  /** fetch data from the table: "organizations" using primary key columns */
  organizations_by_pk?: Maybe<Organizations>;
  /** An array relationship */
  otps: Array<Otps>;
  /** An aggregate relationship */
  otps_aggregate: OtpsAggregate;
  /** fetch data from the table: "otps" using primary key columns */
  otps_by_pk?: Maybe<Otps>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type QueryRootOrganizationsArgs = {
  distinct_on?: InputMaybe<Array<OrganizationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrganizationsOrderBy>>;
  where?: InputMaybe<OrganizationsBoolExp>;
};


export type QueryRootOrganizationsAggregateArgs = {
  distinct_on?: InputMaybe<Array<OrganizationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrganizationsOrderBy>>;
  where?: InputMaybe<OrganizationsBoolExp>;
};


export type QueryRootOrganizationsByPkArgs = {
  id: Scalars['Int'];
};


export type QueryRootOtpsArgs = {
  distinct_on?: InputMaybe<Array<OtpsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OtpsOrderBy>>;
  where?: InputMaybe<OtpsBoolExp>;
};


export type QueryRootOtpsAggregateArgs = {
  distinct_on?: InputMaybe<Array<OtpsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OtpsOrderBy>>;
  where?: InputMaybe<OtpsBoolExp>;
};


export type QueryRootOtpsByPkArgs = {
  id: Scalars['Int'];
};


export type QueryRootUsersArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type QueryRootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type QueryRootUsersByPkArgs = {
  id: Scalars['Int'];
};

export type SubscriptionRoot = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "organizations" */
  organizations: Array<Organizations>;
  /** fetch aggregated fields from the table: "organizations" */
  organizations_aggregate: OrganizationsAggregate;
  /** fetch data from the table: "organizations" using primary key columns */
  organizations_by_pk?: Maybe<Organizations>;
  /** An array relationship */
  otps: Array<Otps>;
  /** An aggregate relationship */
  otps_aggregate: OtpsAggregate;
  /** fetch data from the table: "otps" using primary key columns */
  otps_by_pk?: Maybe<Otps>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type SubscriptionRootOrganizationsArgs = {
  distinct_on?: InputMaybe<Array<OrganizationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrganizationsOrderBy>>;
  where?: InputMaybe<OrganizationsBoolExp>;
};


export type SubscriptionRootOrganizationsAggregateArgs = {
  distinct_on?: InputMaybe<Array<OrganizationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrganizationsOrderBy>>;
  where?: InputMaybe<OrganizationsBoolExp>;
};


export type SubscriptionRootOrganizationsByPkArgs = {
  id: Scalars['Int'];
};


export type SubscriptionRootOtpsArgs = {
  distinct_on?: InputMaybe<Array<OtpsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OtpsOrderBy>>;
  where?: InputMaybe<OtpsBoolExp>;
};


export type SubscriptionRootOtpsAggregateArgs = {
  distinct_on?: InputMaybe<Array<OtpsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OtpsOrderBy>>;
  where?: InputMaybe<OtpsBoolExp>;
};


export type SubscriptionRootOtpsByPkArgs = {
  id: Scalars['Int'];
};


export type SubscriptionRootUsersArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type SubscriptionRootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type SubscriptionRootUsersByPkArgs = {
  id: Scalars['Int'];
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type TimestampComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "user_role". All fields are combined with logical 'AND'. */
export type UserRoleComparisonExp = {
  _eq?: InputMaybe<Scalars['user_role']>;
  _gt?: InputMaybe<Scalars['user_role']>;
  _gte?: InputMaybe<Scalars['user_role']>;
  _in?: InputMaybe<Array<Scalars['user_role']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['user_role']>;
  _lte?: InputMaybe<Scalars['user_role']>;
  _neq?: InputMaybe<Scalars['user_role']>;
  _nin?: InputMaybe<Array<Scalars['user_role']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  email: Scalars['String'];
  first_name: Scalars['String'];
  id: Scalars['Int'];
  last_name: Scalars['String'];
  /** An object relationship */
  organization: Organizations;
  organization_id: Scalars['Int'];
  /** An array relationship */
  otps: Array<Otps>;
  /** An aggregate relationship */
  otps_aggregate: OtpsAggregate;
  role: Scalars['user_role'];
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "users" */
export type UsersOtpsArgs = {
  distinct_on?: InputMaybe<Array<OtpsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OtpsOrderBy>>;
  where?: InputMaybe<OtpsBoolExp>;
};


/** columns and relationships of "users" */
export type UsersOtpsAggregateArgs = {
  distinct_on?: InputMaybe<Array<OtpsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OtpsOrderBy>>;
  where?: InputMaybe<OtpsBoolExp>;
};

/** aggregated selection of "users" */
export type UsersAggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<UsersAggregateFields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type UsersAggregateFields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<UsersAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<UsersMaxFields>;
  min?: Maybe<UsersMinFields>;
  stddev?: Maybe<UsersStddevFields>;
  stddev_pop?: Maybe<UsersStddevPopFields>;
  stddev_samp?: Maybe<UsersStddevSampFields>;
  sum?: Maybe<UsersSumFields>;
  var_pop?: Maybe<UsersVarPopFields>;
  var_samp?: Maybe<UsersVarSampFields>;
  variance?: Maybe<UsersVarianceFields>;
};


/** aggregate fields of "users" */
export type UsersAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UsersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users" */
export type UsersAggregateOrderBy = {
  avg?: InputMaybe<UsersAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<UsersMaxOrderBy>;
  min?: InputMaybe<UsersMinOrderBy>;
  stddev?: InputMaybe<UsersStddevOrderBy>;
  stddev_pop?: InputMaybe<UsersStddevPopOrderBy>;
  stddev_samp?: InputMaybe<UsersStddevSampOrderBy>;
  sum?: InputMaybe<UsersSumOrderBy>;
  var_pop?: InputMaybe<UsersVarPopOrderBy>;
  var_samp?: InputMaybe<UsersVarSampOrderBy>;
  variance?: InputMaybe<UsersVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "users" */
export type UsersArrRelInsertInput = {
  data: Array<UsersInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<UsersOnConflict>;
};

/** aggregate avg on columns */
export type UsersAvgFields = {
  __typename?: 'users_avg_fields';
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "users" */
export type UsersAvgOrderBy = {
  id?: InputMaybe<OrderBy>;
  organization_id?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type UsersBoolExp = {
  _and?: InputMaybe<Array<UsersBoolExp>>;
  _not?: InputMaybe<UsersBoolExp>;
  _or?: InputMaybe<Array<UsersBoolExp>>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  deleted_at?: InputMaybe<TimestamptzComparisonExp>;
  email?: InputMaybe<StringComparisonExp>;
  first_name?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  last_name?: InputMaybe<StringComparisonExp>;
  organization?: InputMaybe<OrganizationsBoolExp>;
  organization_id?: InputMaybe<IntComparisonExp>;
  otps?: InputMaybe<OtpsBoolExp>;
  role?: InputMaybe<UserRoleComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "users" */
export type UsersConstraint =
  /** unique or primary key constraint */
  | 'users_email_organzation_id_unique'
  /** unique or primary key constraint */
  | 'users_pkey';

/** input type for incrementing numeric columns in table "users" */
export type UsersIncInput = {
  id?: InputMaybe<Scalars['Int']>;
  organization_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "users" */
export type UsersInsertInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  last_name?: InputMaybe<Scalars['String']>;
  organization?: InputMaybe<OrganizationsObjRelInsertInput>;
  organization_id?: InputMaybe<Scalars['Int']>;
  otps?: InputMaybe<OtpsArrRelInsertInput>;
  role?: InputMaybe<Scalars['user_role']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type UsersMaxFields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  organization_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "users" */
export type UsersMaxOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  deleted_at?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  first_name?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  last_name?: InputMaybe<OrderBy>;
  organization_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type UsersMinFields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  organization_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "users" */
export type UsersMinOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  deleted_at?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  first_name?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  last_name?: InputMaybe<OrderBy>;
  organization_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "users" */
export type UsersMutationResponse = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type UsersObjRelInsertInput = {
  data: UsersInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<UsersOnConflict>;
};

/** on_conflict condition type for table "users" */
export type UsersOnConflict = {
  constraint: UsersConstraint;
  update_columns?: Array<UsersUpdateColumn>;
  where?: InputMaybe<UsersBoolExp>;
};

/** Ordering options when selecting data from "users". */
export type UsersOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  deleted_at?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  first_name?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  last_name?: InputMaybe<OrderBy>;
  organization?: InputMaybe<OrganizationsOrderBy>;
  organization_id?: InputMaybe<OrderBy>;
  otps_aggregate?: InputMaybe<OtpsAggregateOrderBy>;
  role?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: users */
export type UsersPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "users" */
export type UsersSelectColumn =
  /** column name */
  | 'created_at'
  /** column name */
  | 'deleted_at'
  /** column name */
  | 'email'
  /** column name */
  | 'first_name'
  /** column name */
  | 'id'
  /** column name */
  | 'last_name'
  /** column name */
  | 'organization_id'
  /** column name */
  | 'role'
  /** column name */
  | 'updated_at';

/** input type for updating data in table "users" */
export type UsersSetInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  last_name?: InputMaybe<Scalars['String']>;
  organization_id?: InputMaybe<Scalars['Int']>;
  role?: InputMaybe<Scalars['user_role']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type UsersStddevFields = {
  __typename?: 'users_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "users" */
export type UsersStddevOrderBy = {
  id?: InputMaybe<OrderBy>;
  organization_id?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type UsersStddevPopFields = {
  __typename?: 'users_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "users" */
export type UsersStddevPopOrderBy = {
  id?: InputMaybe<OrderBy>;
  organization_id?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type UsersStddevSampFields = {
  __typename?: 'users_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "users" */
export type UsersStddevSampOrderBy = {
  id?: InputMaybe<OrderBy>;
  organization_id?: InputMaybe<OrderBy>;
};

/** aggregate sum on columns */
export type UsersSumFields = {
  __typename?: 'users_sum_fields';
  id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "users" */
export type UsersSumOrderBy = {
  id?: InputMaybe<OrderBy>;
  organization_id?: InputMaybe<OrderBy>;
};

/** update columns of table "users" */
export type UsersUpdateColumn =
  /** column name */
  | 'created_at'
  /** column name */
  | 'deleted_at'
  /** column name */
  | 'email'
  /** column name */
  | 'first_name'
  /** column name */
  | 'id'
  /** column name */
  | 'last_name'
  /** column name */
  | 'organization_id'
  /** column name */
  | 'role'
  /** column name */
  | 'updated_at';

/** aggregate var_pop on columns */
export type UsersVarPopFields = {
  __typename?: 'users_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "users" */
export type UsersVarPopOrderBy = {
  id?: InputMaybe<OrderBy>;
  organization_id?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type UsersVarSampFields = {
  __typename?: 'users_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "users" */
export type UsersVarSampOrderBy = {
  id?: InputMaybe<OrderBy>;
  organization_id?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type UsersVarianceFields = {
  __typename?: 'users_variance_fields';
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "users" */
export type UsersVarianceOrderBy = {
  id?: InputMaybe<OrderBy>;
  organization_id?: InputMaybe<OrderBy>;
};

export type GetOrganizationQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetOrganizationQuery = { __typename?: 'query_root', organizations_by_pk?: { __typename?: 'organizations', id: number, name: string, deleted_at?: any | null, updated_at?: any | null, created_at?: any | null } | null };
