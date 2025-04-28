// eslint.config.js
import globals from "globals";
import pluginJs from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.node, // ������ ȯ�濡�� ����ϴ� ���� ������ (window, document ��)
        // Node.js ȯ���̶�� globals.node �߰� �Ǵ� ��� ���
        // ��: ...globals.node,
        // �ʿ��� ��� Ư�� ���� ���� �߰�: console: "readonly"
      },
      parserOptions: {
        ecmaVersion: 2022, // ����Ͻô� �ڹٽ�ũ��Ʈ ������ �°� ���� (���� �ֽ� ������ ����մϴ�)
        sourceType: "module",
      },
    },
  },
  pluginJs.configs.recommended, // ESLint ���� ��Ģ ���
  // �ٸ� ESLint �÷������̳� ������ �ʿ��ϸ� ���⿡ �߰�
  eslintPluginPrettierRecommended, // Prettier ��Ģ ���� (ESLint�� �浹 ���� �� Prettier ��Ģ ���� �� ESLint ���� �߻�)
];
