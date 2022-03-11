import * as Query from 'qs';
import { Request, Response } from 'express';
import { isObject, isArray } from '../helpers/utils';

export class FunctionEvent {
  body: any;
  headers: {};
  method: string;
  query: Query.ParsedQs;
  path: string;

  constructor(req: Request) {
    this.body = req.body;
    this.headers = req.headers;
    this.method = req.method;
    this.query = req.query;
    this.path = req.path;
  }
}

export class FunctionContext {
  value: number;
  cb: (err: any, value?: any) => any;
  headerValues: {};
  cbCalled: number;

  constructor(cb: (err: any, value?: any) => any) {
    this.value = 200;
    this.cb = cb;
    this.headerValues = {};
    this.cbCalled = 0;
  }

  status(value?: any) {
    if (!value) {
      return this.value;
    }

    this.value = value;
    return this;
  }

  headers(value?: any) {
    if (!value) {
      return this.headerValues;
    }

    this.headerValues = value;
    return this;
  }

  succeed(value: any) {
    let err;
    this.cbCalled++;
    this.cb(err, value);
  }

  fail(value: any) {
    let message;
    this.cbCalled++;
    this.cb(value, message);
  }
}

export function createMiddleware(handler: any) {
  return async (req: Request, res: Response) => {
    const cb = (err: any, functionResult?: any): any => {
      if (err) {
        console.error(err);

        return res.status(500).send(err.toString ? err.toString() : err);
      }

      if (isArray(functionResult) || isObject(functionResult)) {
        res
          .set(fnContext.headers())
          .status(<number>fnContext.status())
          .json(functionResult);
      } else {
        res
          .set(fnContext.headers())
          .status(<number>fnContext.status())
          .send(functionResult);
      }
    };

    const fnEvent = new FunctionEvent(req);
    const fnContext = new FunctionContext(cb);

    Promise.resolve(handler(fnEvent, fnContext, cb))
      .then(r => {
        if (!fnContext.cbCalled) {
          fnContext.succeed(r);
        }
      })
      .catch(e => {
        cb(e);
      });
  };
}
