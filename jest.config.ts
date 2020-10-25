/* eslint-disable @typescript-eslint/strict-boolean-expressions */
export default {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
  // Indicates which provider should be used to instrument code for coverage
  // coverageProvider: "v8",
}
