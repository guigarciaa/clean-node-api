import { HttpResponse, HttpRequest } from '../protocols/http.protocol'
import { MissingParamError } from '../error/missing-param-error'
import { badRequest } from '../helpers/http-helper'

export class SingUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
  }
}
