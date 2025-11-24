function nodepy2js(code:string):string{
    code = code
        .replace("console.print", "console.log")
        .replace("con", "const")
        .replace("print.warn", "consol.warn")
        .replace("print.error", "console.error")
        .replace("##", "//")
        .replace("#*", "/*")
        .replace("*#", "*/");
    return code;        
}

