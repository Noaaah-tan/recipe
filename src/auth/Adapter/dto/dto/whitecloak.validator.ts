/* eslint-disable prettier/prettier */
import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'isUsernameWhitecloak', async: false })
export class IsUsernameWhitecloakConstraint
  implements ValidatorConstraintInterface
{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  validate(username: string, _args: ValidationArguments) {
    return username.toLowerCase().endsWith('@whitecloak.com');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  defaultMessage(_args: ValidationArguments) {
    return 'Only usernames ending with @whitecloak.com are allowed.';
  }
}

export function IsUsernameWhitecloak(validationOptions?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      name: 'isUsernameWhitecloak',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: IsUsernameWhitecloakConstraint,
    });
  };
}
