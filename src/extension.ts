import { window } from 'vscode'
import type { ExtensionContext } from 'vscode'

export function activate(context: ExtensionContext) {
  console.warn('xxx#context', context)
  window.showInformationMessage('halo xxx')

  /**
   * TODOs（完成最小实现）
   *    1、解析当前文件（AST）
   *    2、提取当前文件所有的 export func
   *    3、找到 export func 中引用的 func，做成 maps 存储
   *       maps 中包含：
   *        3.1、func 名称
   *        3.2、func 引用行列
   *        3.3、func 文件路径（外部 import 的 func）
   *    4、使用 canvas 或 svg 生成 思维导图
   *                           ————————————
   *                          |   func B   | -- ...
   *                           ————————————
   *         ————————————    /
   *        |   func A   | --
   *         ————————————    \
   *                           ————————————
   *                          |   func C   | -- ...
   *                           ————————————
   *
   *    5、整体结合使用
   *    6、添加跳转定位事件
   *
   *
   */
}

export function deactivate() { }
