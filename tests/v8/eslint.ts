import { ESLint } from 'eslint';

const eslint = async (text: string, config: ESLint.ConfigData) => {
  try {
    const options: ESLint.Options = {
      fix: true,
      overrideConfig: config,
      useEslintrc: false,
      plugins: {
        'eslint-plugin-disable-autofix': require('eslint-plugin-disable-autofix') as ESLint.Plugin,
      },
    };

    const eslint = new ESLint(options);
    const results = await eslint.lintText(text);

    return results[0].output;
  } catch (error) {
    return error;
  }
};

export default eslint;
