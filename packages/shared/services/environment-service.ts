import Singleton from '@webhook-handler/shared/utils/singleton';

/**
 * @class EnvironmentService
 * @description Environment service class, used to validate the environment variables
 */
export default class EnvironmentService extends Singleton {
  /**
   * @property requiredVariables
   * @description The required environment variables
   */
  private requiredVariables: string[] = ['JWT_SECRET', 'DATABASE_URL', 'PORT', 'API_BASE_URL'];

  /**
   * @constructor
   */
  private constructor() {
    super();
    this.validateEnvironmentVariables();
  }

  /**
   * @description Validate the environment variables
   */
  private validateEnvironmentVariables = () => {
    const missingVariables = this.requiredVariables.filter((variable) => !process.env[variable]);
    if (missingVariables.length > 0) {
      throw new Error(`Missing required environment variables: ${missingVariables.join(', ')}`);
    }
  };

  /**
   * @description Get the environment variable
   * @param key - The key of the environment variable
   * @returns The value of the environment variable
   */
  getEnvironment = (key: string): string => {
    if (!this.requiredVariables.includes(key)) {
      throw new Error(`Environment variable ${key} is not required`);
    }
    const value = process.env[key];
    if (!value) {
      throw new Error(`Environment variable ${key} is not set`);
    }
    return value;
  };
}
