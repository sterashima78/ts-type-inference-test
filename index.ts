import ts from "typescript";

function printInferredType(filePath: string) {
  const program = ts.createProgram([filePath], {});
  const sourceFile = program.getSourceFile(filePath)!;
  const checker = program.getTypeChecker();

  function visit(node: ts.Node) {
    if (ts.isTypeAliasDeclaration(node)) {
      const inferredType = checker.typeToString(
        checker.getTypeAtLocation(node), 
        node, 
        ts.TypeFormatFlags.InTypeAlias
      );
      console.log(`Inferred type for ${node.name.text}: ${inferredType}`);
    }
    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
}

printInferredType(process.argv[2]);
