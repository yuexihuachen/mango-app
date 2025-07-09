CREATE TABLE "category" (
  "category_id" SERIAL NOT NULL,
  "category_name" varchar(255) NOT NULL,
  "category_alias" varchar(255) NOT NULL,
  "user_id" int4 NOT NULL,
  "create_date" date NOT NULL,
  "update_date" date NOT NULL,
  PRIMARY KEY ("category_id")
);
COMMENT ON COLUMN "category"."category_id" IS '类型id';
COMMENT ON COLUMN "category"."category_name" IS '类型名称';
COMMENT ON COLUMN "category"."category_alias" IS '类型别名';
COMMENT ON COLUMN "category"."user_id" IS '用户id';
COMMENT ON COLUMN "category"."create_date" IS '创建时间';
COMMENT ON COLUMN "category"."update_date" IS '更新时间';

CREATE TABLE "discuss" (
  "discuss_id" SERIAL NOT NULL,
  "nick_name" varchar(255),
  "email" varchar(255),
  "content" text,
  "like_count" int4 DEFAULT 0,
  "note_id" int4 NOT NULL,
  "create_date" date NOT NULL,
  PRIMARY KEY ("discuss_id")
);
COMMENT ON COLUMN "discuss"."discuss_id" IS '评论id';
COMMENT ON COLUMN "discuss"."nick_name" IS '评论用户昵称';
COMMENT ON COLUMN "discuss"."email" IS '评论用户邮箱';
COMMENT ON COLUMN "discuss"."content" IS '评论内容';
COMMENT ON COLUMN "discuss"."like_count" IS '点赞数';
COMMENT ON COLUMN "discuss"."note_id" IS '笔记id';
COMMENT ON COLUMN "discuss"."create_date" IS '创建时间';

CREATE TABLE "note" (
  "note_id" SERIAL NOT NULL,
  "title" varchar(255) NOT NULL,
  "content" text NOT NULL,
  "is_push" int4 NOT NULL,
  "category_id" int4 NOT NULL,
  "tag_id" int4 NOT NULL,
  "user_id" int4 NOT NULL,
  "push_date" date NOT NULL,
  "update_date" date NOT NULL,
  PRIMARY KEY ("note_id")
);
COMMENT ON COLUMN "note"."note_id" IS '笔记id';
COMMENT ON COLUMN "note"."title" IS '标题';
COMMENT ON COLUMN "note"."content" IS '内容';
COMMENT ON COLUMN "note"."is_push" IS '是否发布';
COMMENT ON COLUMN "note"."category_id" IS '类型id';
COMMENT ON COLUMN "note"."tag_id" IS '标签id';
COMMENT ON COLUMN "note"."user_id" IS '用户id';
COMMENT ON COLUMN "note"."push_date" IS '发布时间';
COMMENT ON COLUMN "note"."update_date" IS '更新时间';

CREATE TABLE "tag" (
  "tag_id" SERIAL NOT NULL,
  "tag_name" varchar(255) NOT NULL,
  "user_id" int4 NOT NULL,
  "create_date" date NOT NULL,
  "update_date" date NOT NULL,
  PRIMARY KEY ("tag_id")
);
COMMENT ON COLUMN "tag"."tag_id" IS '标签id';
COMMENT ON COLUMN "tag"."tag_name" IS '标签名称';
COMMENT ON COLUMN "tag"."user_id" IS '用户id';
COMMENT ON COLUMN "tag"."create_date" IS '创建时间';
COMMENT ON COLUMN "tag"."update_date" IS '更新时间';

CREATE TABLE "user" (
  "user_id" SERIAL NOT NULL,
  "username" varchar(255) NOT NULL,
  "password" varchar(255) NOT NULL,
  "user_emai" varchar(255) NOT NULL,
  "create_date" date NOT NULL,
  "update_date" date NOT NULL,
  PRIMARY KEY ("user_id")
);
COMMENT ON COLUMN "user"."user_id" IS '用户id';
COMMENT ON COLUMN "user"."username" IS '用户名';
COMMENT ON COLUMN "user"."password" IS '密码';
COMMENT ON COLUMN "user"."user_emai" IS '用户邮箱';
COMMENT ON COLUMN "user"."create_date" IS '创建时间';
COMMENT ON COLUMN "user"."update_date" IS '更新时间';

