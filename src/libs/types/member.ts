import { ObjectId } from "mongoose";
import { MemberStatus, MemberType } from "./enums/member.enum";
import { Request } from "express";
import { Session } from "express-session";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";

export interface Member {
  _id: ObjectId;
  memberType: MemberType;
  memberStatus: MemberStatus;
  memberNick: string;
  memberPhone: string;
  memberPassword?: string;
  memberAddreas?: string;
  memberDesc?: string;
  memberImage?: string;
  memberPoints: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface MemberInput {
  memberType?: MemberType;
  memberStatus?: MemberStatus;
  memberNick: string;
  memberPhone: string;
  memberPassword: string;
  memberAddreas?: string;
  memberDesc?: string;
  memberImage?: string;
  memberPoints?: number;
}

export interface LoginInput {
  memberNick: string;
  memberPassword: string;
}

export interface MemberUpdateInput {
  _id: ObjectId;
  memberStatus?: MemberStatus;
  memberNick?: string;
  memberPhone?: string;
  memberPassword?: string;
  memberAddreas?: string;
  memberDesc?: string;
  memberImage?: string;
}

export interface ExtendedRequest<
  P extends ParamsDictionary = ParamsDictionary,
  ReqBody = any,
  ReqQuery extends ParsedQs = ParsedQs
> extends Request<P> {
  params: P;
  body: ReqBody;
  query: ReqQuery;
  member: Member;
  file?: Express.Multer.File;
  files?: Express.Multer.File[];
}

export interface AdminRequest<
  P extends ParamsDictionary = ParamsDictionary,
  ReqBody = any,
  ReqQuery extends ParsedQs = ParsedQs
> extends Request<P> {
  params: P;
  body: ReqBody;
  query: ReqQuery;
  member: Member;
  session: Session & { member: Member };
  file?: Express.Multer.File;
  files?: Express.Multer.File[];
}
