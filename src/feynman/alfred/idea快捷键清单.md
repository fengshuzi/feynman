
---
title: idea小手段
category:
  - 编程工具
---


# idea小手段
@(编程工具)[idea, 小手段]
## 1、lombok插件安装
- [ ] @Setter
- [ ] @Getter
- [ ] @Data
- [ ] @Log(这是一个泛型注解，具体有很多种形式)
- [ ] @AllArgsConstructor
- [ ] @NoArgsConstructor
- [ ] @EqualsAndHashCode
- [ ] @NonNull
- [ ] @Cleanup
- [ ] @ToString
- [ ] @RequiredArgsConstructor
- [ ] @Value
- [ ] @SneakyThrows
- [ ] @Synchronized

## 2、mybatis log plugin
把 mybatis 输出的sql日志还原成完整的sql语句。


## 3、mybatisx plugin
- [ ] 提供Mapper接口与配置文件中对应SQL的导航
- [ ] 编辑XML文件时自动补全
- [ ] 根据Mapper接口, 使用快捷键生成xml文件及SQL标签
- [ ] ResultMap中的property支持自动补全，支持级联(属性A.属性B.属性C)
- [ ] 快捷键生成@Param注解
- [ ] XML中编辑SQL时, 括号自动补全
- [ ] XML中编辑SQL时, 支持参数自动补全(基于@Param注解识别参数)
- [ ] 自动检查Mapper XML文件中ID冲突
- [ ] 自动检查Mapper XML文件中错误的属性值
- [ ] 支持Find Usage
- [ ] 支持重构从命名
- [ ] 支持别名
- [ ] 自动生成ResultMap属性
- [ ] 快捷键:   Option + Enter(Mac) | Alt + Enter(Windows)
- [ ] 提供Mapper接口方法与XML配置文件中对应SQL自由切换导航。
- [ ] 提供Mapper接口方法调用明细。

## 4、mybatis tool
同功能3



## 5、Alibaba Java Coding Guidelines plugin support
阿里代码规范检查插件，基于阿里java开发手册进行代码规范检查


## 6、mybatis xml去除黄色警告和绿色背景
### 1）、去掉 No data sources configure 警告
1. Prefernces ⇒ Editor ⇒ Inspections ⇒ SQL ⇒ No data sources configure。
2. 取消勾选，去掉这个检查，然后点击 OK 按钮即可。

### 2）、去掉 SQL dialect is not configured 警告
1. Prefernces ⇒ Editor ⇒ Inspections ⇒ SQL ⇒ SQL dialect detection。
2. 取消勾选，去掉这个检查，然后点击 OK 按钮即可。


### 3）、去掉“注入语言”的背景色

1. Prefernces ⇒ Editor ⇒ Colors & Fonts ⇒ General ⇒ Code ⇒ Injected language fragment ⇒ Background。
2. 取消勾选，然后点击 OK 按钮即可。


## 5、maven helper
帮助管理maven依赖，重点解决maven冲突问题



## 6、JavaDoc

idea安装javaDoc插件，替换.idea下面的javadoc配置，位置如下

![image-20230117180131645](https://fengshuzi.oss-cn-guangzhou.aliyuncs.com/image/image-20230117180131645.png)

```
<?xml version="1.0" encoding="UTF-8"?>
<project version="4">
  <component name="JavaDocConfiguration">
    <GENERAL>
      <MODE>UPDATE</MODE>
      <OVERRIDDEN_METHODS>false</OVERRIDDEN_METHODS>
      <SPLITTED_CLASS_NAME>true</SPLITTED_CLASS_NAME>
      <LEVELS>
        <LEVEL>FIELD</LEVEL>
        <LEVEL>METHOD</LEVEL>
        <LEVEL>TYPE</LEVEL>
      </LEVELS>
      <VISIBILITIES>
        <VISIBILITY>PUBLIC</VISIBILITY>
        <VISIBILITY>DEFAULT</VISIBILITY>
        <VISIBILITY>PROTECTED</VISIBILITY>
      </VISIBILITIES>
    </GENERAL>
    <TEMPLATES>
      <CLASSES>
        <CLASS>
          <KEY>^.*(public|protected|private)*.+interface\s+\w+.*</KEY>
          <VALUE>/**\n
 * The interface ${name}.\n
&amp;lt;#if element.typeParameters?has_content&amp;gt;        * \n
&amp;lt;/#if&amp;gt;
&amp;lt;#list element.typeParameters as typeParameter&amp;gt;
        * @param &amp;lt;${typeParameter.name}&amp;gt; the type parameter\n
&amp;lt;/#list&amp;gt;
   * \n
   * @author Created on  ${.now?string[&quot;yyyy.MM.dd&quot;]} by lizhifeng\n
 */</VALUE>
        </CLASS>
        <CLASS>
          <KEY>^.*(public|protected|private)*.+enum\s+\w+.*</KEY>
          <VALUE>/**\n
 * The enum ${name}.\n
 */</VALUE>
        </CLASS>
        <CLASS>
          <KEY>^.*(public|protected|private)*.+class\s+\w+.*</KEY>
          <VALUE>/**\n
 * 功能：The type ${name}.\n
 * 详细：\n
   * \n
   * @author Created on  ${.now?string[&quot;yyyy.MM.dd&quot;]} by lizhifeng\n
 */</VALUE>
        </CLASS>
        <CLASS>
          <KEY>.+</KEY>
          <VALUE>/**\n
 * 功能：The type ${name}.\n
 * 详细：\n
   * \n
   * @author Created on  ${.now?string[&quot;yyyy.MM.dd&quot;]} by lizhifeng\n
 */</VALUE>
        </CLASS>
      </CLASSES>
      <CONSTRUCTORS>
        <CONSTRUCTOR>
          <KEY>.+</KEY>
          <VALUE>/**\n
 * Instantiates a new ${name}.\n
&lt;#if element.parameterList.parameters?has_content&gt;         *\n
&lt;/#if&gt;&lt;#list element.parameterList.parameters as parameter&gt;         * @param ${parameter.name} the ${paramNames[parameter.name]}\n
&lt;/#list&gt;&lt;#if element.throwsList.referenceElements?has_content&gt;         *\n
&lt;/#if&gt;&lt;#list element.throwsList.referenceElements as exception&gt;         * @throws ${exception.referenceName} the ${exceptionNames[exception.referenceName]}\n
&lt;/#list&gt; */</VALUE>
        </CONSTRUCTOR>
      </CONSTRUCTORS>
      <METHODS>
        <METHOD>
          <KEY>^.*(public|protected|private)*\s*.*(\w(\s*&lt;.+&gt;)*)+\s+get\w+\s*\(.*\).+</KEY>
          <VALUE>/**\n
 * Gets ${partName}.\n
&lt;#if element.typeParameters?has_content&gt;         * \n
&lt;/#if&gt;&lt;#list element.typeParameters as typeParameter&gt;         * @param &lt;${typeParameter.name}&gt; the type parameter\n
&lt;/#list&gt;&lt;#if element.parameterList.parameters?has_content&gt;         *\n
&lt;/#if&gt;&lt;#list element.parameterList.parameters as parameter&gt;         * @param ${parameter.name} the ${paramNames[parameter.name]}\n
&lt;/#list&gt;&lt;#if isNotVoid&gt;         *\n
         * @return the ${partName}\n
&lt;/#if&gt;&lt;#if element.throwsList.referenceElements?has_content&gt;         *\n
&lt;/#if&gt;&lt;#list element.throwsList.referenceElements as exception&gt;         * @throws ${exception.referenceName} the ${exceptionNames[exception.referenceName]}\n
&lt;/#list&gt; */</VALUE>
        </METHOD>
        <METHOD>
          <KEY>^.*(public|protected|private)*\s*.*(void|\w(\s*&lt;.+&gt;)*)+\s+set\w+\s*\(.*\).+</KEY>
          <VALUE>/**\n
 * Sets ${partName}.\n
&lt;#if element.typeParameters?has_content&gt;         * \n
&lt;/#if&gt;&lt;#list element.typeParameters as typeParameter&gt;         * @param &lt;${typeParameter.name}&gt; the type parameter\n
&lt;/#list&gt;&lt;#if element.parameterList.parameters?has_content&gt;         *\n
&lt;/#if&gt;&lt;#list element.parameterList.parameters as parameter&gt;         * @param ${parameter.name} the ${paramNames[parameter.name]}\n
&lt;/#list&gt;&lt;#if isNotVoid&gt;         *\n
         * @return the ${partName}\n
&lt;/#if&gt;&lt;#if element.throwsList.referenceElements?has_content&gt;         *\n
&lt;/#if&gt;&lt;#list element.throwsList.referenceElements as exception&gt;         * @throws ${exception.referenceName} the ${exceptionNames[exception.referenceName]}\n
&lt;/#list&gt; */</VALUE>
        </METHOD>
        <METHOD>
          <KEY>^.*((public\s+static)|(static\s+public))\s+void\s+main\s*\(\s*String\s*(\[\s*\]|\.\.\.)\s+\w+\s*\).+</KEY>
          <VALUE>/**\n
 * 功能：${name}.&lt;br&gt;\n
 * 详细：\n
&lt;#if element.typeParameters?has_content&gt;         * \n
&lt;/#if&gt;&lt;#list element.typeParameters as typeParameter&gt;         * @param &lt;${typeParameter.name}&gt; the type parameter\n
&lt;/#list&gt;&lt;#if element.parameterList.parameters?has_content&gt;         *\n
&lt;/#if&gt;&lt;#list element.parameterList.parameters as parameter&gt;         * @param ${parameter.name} the ${paramNames[parameter.name]}\n
&lt;/#list&gt;&lt;#if isNotVoid&gt;         *\n
         * @return the ${return}\n
&lt;/#if&gt;&lt;#if element.throwsList.referenceElements?has_content&gt;         *\n
&lt;/#if&gt;&lt;#list element.throwsList.referenceElements as exception&gt;         * @throws ${exception.referenceName} the ${exceptionNames[exception.referenceName]}\n
&lt;/#list&gt;     * \n
     * @author Created on  ${.now?string[&quot;yyyy.MM.dd&quot;]} by lizhifeng\n
*/</VALUE>
        </METHOD>
        <METHOD>
          <KEY>.+</KEY>
          <VALUE>/**\n
 * 功能：${name}.&lt;br&gt;\n
 * 详细：\n
&lt;#if element.typeParameters?has_content&gt;         * \n
&lt;/#if&gt;&lt;#list element.typeParameters as typeParameter&gt;         * @param &lt;${typeParameter.name}&gt; the type parameter\n
&lt;/#list&gt;&lt;#if element.parameterList.parameters?has_content&gt;         *\n
&lt;/#if&gt;&lt;#list element.parameterList.parameters as parameter&gt;         * @param ${parameter.name} the ${paramNames[parameter.name]}\n
&lt;/#list&gt;&lt;#if isNotVoid&gt;         *\n
         * @return the ${return}\n
&lt;/#if&gt;&lt;#if element.throwsList.referenceElements?has_content&gt;         *\n
&lt;/#if&gt;&lt;#list element.throwsList.referenceElements as exception&gt;         * @throws ${exception.referenceName} the ${exceptionNames[exception.referenceName]}\n
&lt;/#list&gt;     * \n
     * @author Created on  ${.now?string[&quot;yyyy.MM.dd&quot;]} by lizhifeng\n
*/</VALUE>
        </METHOD>
      </METHODS>
      <FIELDS>
        <FIELD>
          <KEY>^.*(public|protected|private)*.+static.*(\w\s\w)+.+</KEY>
          <VALUE>/**\n
 * The constant ${element.getName()}.\n
 */</VALUE>
        </FIELD>
        <FIELD>
          <KEY>^.*(public|protected|private)*.*(\w\s\w)+.+</KEY>
          <VALUE>/**\n
    &lt;#if element.parent.isInterface()&gt;        * The constant ${element.getName()}.\n
&lt;#else&gt;        * The ${name}.\n
&lt;/#if&gt; */</VALUE>
        </FIELD>
        <FIELD>
          <KEY>.+</KEY>
          <VALUE>/**\n
    &lt;#if element.parent.isEnum()&gt;        *${name} ${typeName}.\n
&lt;#else&gt;        * The ${name}.\n
&lt;/#if&gt;*/</VALUE>
        </FIELD>
      </FIELDS>
    </TEMPLATES>
  </component>
</project>


```





## 7、鼠标悬浮显示注释

![image-20230117175858468](https://fengshuzi.oss-cn-guangzhou.aliyuncs.com/image/image-20230117175858468.png)


## 8、配置database
idea集成了datagrid插件，非常好用，此外配置数据源后，mybatis xml编写sql可以达到sql代码提示的功能



