/*
 Navicat Premium Dump SQL

 Source Server         : some-postgres
 Source Server Type    : PostgreSQL
 Source Server Version : 170005 (170005)
 Source Host           : localhost:5432
 Source Catalog        : note_db
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 170005 (170005)
 File Encoding         : 65001

 Date: 26/07/2025 19:29:18
*/


-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS "public"."category";
CREATE TABLE "public"."category" (
  "category_id" int4 NOT NULL DEFAULT nextval('category_category_id_seq'::regclass),
  "category_name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "category_alias" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "user_id" int4 NOT NULL,
  "create_date" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "update_date" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "order" int4 NOT NULL
)
;
COMMENT ON COLUMN "public"."category"."category_id" IS '类型id';
COMMENT ON COLUMN "public"."category"."category_name" IS '类型名称';
COMMENT ON COLUMN "public"."category"."category_alias" IS '类型别名';
COMMENT ON COLUMN "public"."category"."user_id" IS '用户id';
COMMENT ON COLUMN "public"."category"."create_date" IS '创建时间';
COMMENT ON COLUMN "public"."category"."update_date" IS '更新时间';
COMMENT ON COLUMN "public"."category"."order" IS '排序';

-- ----------------------------
-- Primary Key structure for table category
-- ----------------------------
ALTER TABLE "public"."category" ADD CONSTRAINT "category_pkey" PRIMARY KEY ("category_id");


/*
 Navicat Premium Dump SQL

 Source Server         : some-postgres
 Source Server Type    : PostgreSQL
 Source Server Version : 170005 (170005)
 Source Host           : localhost:5432
 Source Catalog        : note_db
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 170005 (170005)
 File Encoding         : 65001

 Date: 26/07/2025 19:30:21
*/


-- ----------------------------
-- Table structure for discuss
-- ----------------------------
DROP TABLE IF EXISTS "public"."discuss";
CREATE TABLE "public"."discuss" (
  "discuss_id" int4 NOT NULL DEFAULT nextval('discuss_discuss_id_seq'::regclass),
  "nick_name" varchar(255) COLLATE "pg_catalog"."default",
  "email" varchar(255) COLLATE "pg_catalog"."default",
  "content" text COLLATE "pg_catalog"."default",
  "like_count" int4 DEFAULT 0,
  "note_id" int4 NOT NULL,
  "create_date" date NOT NULL
)
;
COMMENT ON COLUMN "public"."discuss"."discuss_id" IS '评论id';
COMMENT ON COLUMN "public"."discuss"."nick_name" IS '评论用户昵称';
COMMENT ON COLUMN "public"."discuss"."email" IS '评论用户邮箱';
COMMENT ON COLUMN "public"."discuss"."content" IS '评论内容';
COMMENT ON COLUMN "public"."discuss"."like_count" IS '点赞数';
COMMENT ON COLUMN "public"."discuss"."note_id" IS '笔记id';
COMMENT ON COLUMN "public"."discuss"."create_date" IS '创建时间';

-- ----------------------------
-- Primary Key structure for table discuss
-- ----------------------------
ALTER TABLE "public"."discuss" ADD CONSTRAINT "discuss_pkey" PRIMARY KEY ("discuss_id");


/*
 Navicat Premium Dump SQL

 Source Server         : some-postgres
 Source Server Type    : PostgreSQL
 Source Server Version : 170005 (170005)
 Source Host           : localhost:5432
 Source Catalog        : note_db
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 170005 (170005)
 File Encoding         : 65001

 Date: 26/07/2025 19:30:29
*/


-- ----------------------------
-- Table structure for note
-- ----------------------------
DROP TABLE IF EXISTS "public"."note";
CREATE TABLE "public"."note" (
  "note_id" int4 NOT NULL DEFAULT nextval('note_note_id_seq'::regclass),
  "title" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "content" text COLLATE "pg_catalog"."default" NOT NULL,
  "is_push" int4 NOT NULL,
  "category_id" int4 NOT NULL,
  "tag_id" int4 NOT NULL,
  "user_id" int4 NOT NULL,
  "push_date" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "update_date" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "mark_content" text COLLATE "pg_catalog"."default" NOT NULL,
  "description" varchar(500) COLLATE "pg_catalog"."default" NOT NULL
)
;
COMMENT ON COLUMN "public"."note"."note_id" IS '笔记id';
COMMENT ON COLUMN "public"."note"."title" IS '标题';
COMMENT ON COLUMN "public"."note"."content" IS '内容';
COMMENT ON COLUMN "public"."note"."is_push" IS '是否发布';
COMMENT ON COLUMN "public"."note"."category_id" IS '类型id';
COMMENT ON COLUMN "public"."note"."tag_id" IS '标签id';
COMMENT ON COLUMN "public"."note"."user_id" IS '用户id';
COMMENT ON COLUMN "public"."note"."push_date" IS '发布时间';
COMMENT ON COLUMN "public"."note"."update_date" IS '更新时间';
COMMENT ON COLUMN "public"."note"."mark_content" IS 'mark内容';
COMMENT ON COLUMN "public"."note"."description" IS '描述';

-- ----------------------------
-- Primary Key structure for table note
-- ----------------------------
ALTER TABLE "public"."note" ADD CONSTRAINT "note_pkey" PRIMARY KEY ("note_id");


/*
 Navicat Premium Dump SQL

 Source Server         : some-postgres
 Source Server Type    : PostgreSQL
 Source Server Version : 170005 (170005)
 Source Host           : localhost:5432
 Source Catalog        : note_db
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 170005 (170005)
 File Encoding         : 65001

 Date: 26/07/2025 19:30:37
*/


-- ----------------------------
-- Table structure for tag
-- ----------------------------
DROP TABLE IF EXISTS "public"."tag";
CREATE TABLE "public"."tag" (
  "tag_id" int4 NOT NULL DEFAULT nextval('tag_tag_id_seq'::regclass),
  "tag_name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "user_id" int4 NOT NULL,
  "create_date" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "update_date" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;
COMMENT ON COLUMN "public"."tag"."tag_id" IS '标签id';
COMMENT ON COLUMN "public"."tag"."tag_name" IS '标签名称';
COMMENT ON COLUMN "public"."tag"."user_id" IS '用户id';
COMMENT ON COLUMN "public"."tag"."create_date" IS '创建时间';
COMMENT ON COLUMN "public"."tag"."update_date" IS '更新时间';

-- ----------------------------
-- Primary Key structure for table tag
-- ----------------------------
ALTER TABLE "public"."tag" ADD CONSTRAINT "tag_pkey" PRIMARY KEY ("tag_id");


/*
 Navicat Premium Dump SQL

 Source Server         : some-postgres
 Source Server Type    : PostgreSQL
 Source Server Version : 170005 (170005)
 Source Host           : localhost:5432
 Source Catalog        : note_db
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 170005 (170005)
 File Encoding         : 65001

 Date: 26/07/2025 19:30:43
*/


-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS "public"."user";
CREATE TABLE "public"."user" (
  "user_id" int4 NOT NULL DEFAULT nextval('user_user_id_seq'::regclass),
  "username" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "password" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "user_email" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "create_date" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "update_date" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "order" int4
)
;
COMMENT ON COLUMN "public"."user"."user_id" IS '用户id';
COMMENT ON COLUMN "public"."user"."username" IS '用户名';
COMMENT ON COLUMN "public"."user"."password" IS '密码';
COMMENT ON COLUMN "public"."user"."user_email" IS '用户邮箱';
COMMENT ON COLUMN "public"."user"."create_date" IS '创建时间';
COMMENT ON COLUMN "public"."user"."update_date" IS '更新时间';
COMMENT ON COLUMN "public"."user"."order" IS '排序';

-- ----------------------------
-- Primary Key structure for table user
-- ----------------------------
ALTER TABLE "public"."user" ADD CONSTRAINT "user_pkey" PRIMARY KEY ("user_id");
