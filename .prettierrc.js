/*
 * @Author: Aiva
 * @Date: 2022-01-14 16:49:12
 * @LastEditors: Aiva
 * @LastEditTime: 2022-01-14 16:49:15
 * @Description:
 * @FilePath: \cra-project-template\.prettierrc.js
 */
module.exports = {
  printWidth: 100, // 指定代码长度，超出换行
  tabWidth: 2, // tab 键的宽度
  useTabs: false, // 不使用tab
  semi: false, // 结尾加上分号
  singleQuote: false, // 使用单引号
  quoteProps: "as-needed", // 要求对象字面量属性是否使用引号包裹,(‘as-needed’: 没有特殊要求，禁止使用，'consistent': 保持一致 , preserve: 不限制，想用就用)
  trailingComma: "es5", // 确保对象的最后一个属性后有逗号
  bracketSpacing: true, // 大括号有空格 { name: 'rose' }
  arrowParens: "always", // 箭头函数，单个参数添加括号
  htmlWhitespaceSensitivity: "ignore", // html文件的空格敏感度，控制空格是否影响布局
}
