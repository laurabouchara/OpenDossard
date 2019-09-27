import {BodyParams, Controller, Get, Post, Property, Req, Required, UseAfter} from '@tsed/common';
import * as Express from 'express';
import * as Passport from 'passport';
import {BadRequest} from 'ts-httpexceptions';
import {IUser} from '../../entity/User';
import {checkEmail} from '../../util/checkEmail';
import {Consumes, Docs} from '@tsed/swagger';

function passportAuthenticate(event: string) {
  return (request: Express.Request, response: Express.Response, next: Express.NextFunction) => {
    Passport
      .authenticate(event, (err, user: IUser) => {
        if (err) return next(err);
        if (!user) {
          return next(new BadRequest("Mauvais email ou mot de passe"));
        }

        request.logIn(user, (err) => {
          if (err) return next(err);
          response.json(user);
        });

      })(request, response, next);
  };
}

@Controller("/passport")
@Docs('api-v2')
export class PassportCtrl {
  /**
   * Authenticate user with local info (in Database).
   * @param email
   * @param password
   */
  @Post("/login")
  @UseAfter(passportAuthenticate("login"))
  @Consumes("application/json")
  async login(@Required() @Property() @BodyParams("email") email : string, @Property() @BodyParams("password") password : string ) {
    checkEmail(email);
  }

  /**
   * Try to register new account
   * @param email
   * @param password
   * @param firstName
   * @param lastName
   */
  @Post("/signup")
  @UseAfter(passportAuthenticate("signup"))
  async signup(@Required() @BodyParams("email") email: string,
               @Required() @BodyParams("password") password: string,
               @Required() @BodyParams("firstName") firstName: string,
               @Required() @BodyParams("lastName") lastName: string) {
    checkEmail(email);
  }

  /**
   * Disconnect user
   * @param request
   */
  @Get("/logout")
  public logout(@Req() request: Express.Request): string {
    request.logout();
    return "Disconnected";
  }
}
