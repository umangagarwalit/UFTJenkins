Option Explicit

'E.g.1
Dim value1
value1 = Browser("ParaBank | Welcome | Online").GetROProperty("title") @@ script infofile_;_ZIP::ssf1.xml_;_
MsgBox(value1)
Print(value1)

'E.g.2
Dim value2
value2 = Browser("ParaBank | Welcome | Online").Page("ParaBank | Welcome | Online").WebElement("Customer Login").GetROProperty("innertext") @@ script infofile_;_ZIP::ssf1.xml_;_
MsgBox(value2)
Print(value2)

'E.g.3
Dim value3
value3 = Browser("ParaBank | Welcome | Online").Page("ParaBank | Welcome | Online").WebElement("Customer Login").GetROProperty("html tag") @@ script infofile_;_ZIP::ssf1.xml_;_
MsgBox(value3)
Print(value3)

