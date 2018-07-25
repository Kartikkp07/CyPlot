package edu.ucsf.rbvi.cyPlot.internal.utils;

import java.util.Map;

public class JSUtils {
	
	static String preamble = "<html><head><script src=\"https://cdn.plot.ly/plotly-latest.min.js\"></script></head>"+
									 "<script type=\"text/javascript\" src=\"https://unpkg.com/react-dom@16.2.0/umd/react-dom.production.min.js\"></script></head>";
	public static String getPreamble() { return preamble; }

	public static String getScatterPlot(String x, String y, String mode, String nameSelection, String nameArray, String xLabel, String yLabel) {
		StringBuilder builder = new StringBuilder();
		builder.append(getPreamble());
		builder.append("<body><div id=\"CyPlot\" style=\"width:600px;height:600px;\"></div>");
		builder.append("<script> var trace1 = { x: " + x + ", y: " + y + ", type: 'scatter', name: 'trace', mode: '" + mode + "', text: " + nameArray + "};");
		builder.append("var data = [trace1];");
		builder.append(getLabelCode(xLabel, yLabel));
		builder.append("Plotly.newPlot('CyPlot', data, layout);");
		builder.append("var myPlot = document.getElementById('CyPlot');");
		builder.append(getResizeCode());
		builder.append(getClickCode("myPlot", nameSelection));
		builder.append(getLassoCode("myPlot", nameSelection));
		builder.append(getPlotly());

		return builder.toString();
	}
	
	public static String getFilledAreaPlot(String x, String y, String mode, String nameSelection, String nameArray, String xLabel, String yLabel) {
		StringBuilder builder = new StringBuilder();
		builder.append(getPreamble());
		builder.append("<body><div id=\"CyPlot\" style=\"width:600px;height:600px;\"></div>");
		builder.append("<script> var trace1 = { x: " + x + ", y: " + y + ", fill: 'tonexty', type: 'scatter', name: 'trace', mode: '" + mode + "', text: " + nameArray + "};");
		builder.append("var data = [trace1];");
		builder.append(getLabelCode(xLabel, yLabel));
		builder.append("Plotly.newPlot('CyPlot', data, layout);");
		builder.append("var myPlot = document.getElementById('CyPlot');");
		builder.append(getResizeCode());
		builder.append(getClickCode("myPlot", nameSelection));
		builder.append(getLassoCode("myPlot", nameSelection));
		builder.append(getPlotly());

		return builder.toString();
	}
	
	public static String getVolcanoPlot(String x, String y, String nameArray, String xLabel, String yLabel) {
		StringBuilder builder = new StringBuilder();
		builder.append(getPreamble());
		builder.append("<body><div id=\"CyPlot\" style=\"width:600px;height:600px;\"></div>");
		builder.append("<script> var xArr = " + x + ";");
		builder.append("for(var i = 0; i < xArr.length; i++) { ");
		builder.append("xArr[i] = ((Math.log10(xArr[i])) / (Math.log(2))); } " );
		builder.append("var yArr = " + y + ";");
		builder.append("for(var i = 0; i < yArr.length; i++) {");
		builder.append("yArr[i] = Math.log10(yArr[i]) * -1; }");		
		builder.append("var trace1 = { x: xArr , y:  yArr , type: 'scatter', mode: 'markers', name: 'trace', text: " + nameArray + "};");
		builder.append("var data = [trace1];");
		builder.append(getLabelCode(xLabel, yLabel));
		builder.append("Plotly.newPlot('CyPlot', data, layout);");
		builder.append("var myPlot = document.getElementById('CyPlot');");
		//attempting resize
		builder.append(getResizeCode());

	//	builder.append(getClickCode("myPlot", nameSelection));
	//	builder.append(getLassoCode("myPlot", nameSelection));
		builder.append(getPlotly());

		return builder.toString();
	}
	
	public static String getHeatMap(String lowRGB, String medRGB, String highRGB, String dataArray, String colNames, String title) {
		StringBuilder builder = new StringBuilder();
		builder.append(getPreamble());
		builder.append("<body><div id=\"CyPlot\" style=\"width:600px;height:600px;\"></div>");
		builder.append("<script> var colorscaleValue = [[0, '" + lowRGB + "'], [.5, '" + medRGB + "'], [1, '" + highRGB + "']]; var data = [{z: " + dataArray + ", x: " + colNames + ", type: \"heatmap\", transpose: true, colorscale: colorscaleValue}];");
		builder.append("var layout = {title: '" + title + "'};");
		builder.append("Plotly.newPlot('CyPlot', data, layout);");
		builder.append(getPlotly());

		return builder.toString();
	}

	
	public static String getViolinPlot(String x, String y, String nameArray, String xLabel, String yLabel) {
		StringBuilder builder = new StringBuilder();
		builder.append(getPreamble());
		builder.append("<body><div id=\"CyPlot\" style=\"width:600px;height:600px;\"></div>");
		builder.append("<script>Plotly.d3.csv(\"https://raw.githubusercontent.com/plotly/datasets/master/violin_data.csv\", function(err, rows){" );
		builder.append("function unpack(rows, key) {");
		builder.append("return rows.map(function(row) { return row[key]; });}" );
		builder.append("var data = [{ type: 'violin', x: unpack(rows, 'total_bill'), points: 'none', box: { visible: true}, boxpoints: false, line: { color:'black'}, fillcolor: '#8dd3c7', opacity: 0.6, meanline: { visible: true }, y0:\"total bill\" }];");
		builder.append("var layout = { title:\"violin plot\", xaxis: { zeroline: false }};");
		builder.append("Plotly.newPlot('CyPlot', data, layout);});");
		builder.append("var myPlot = document.getElementById('CyPlot');");
		//attempting resize
		builder.append(getResizeCode());
		builder.append(getPlotly());

		return builder.toString();
	}
	
	public static String getBarChart(String xArray, String yArray, String xLabel, String yLabel) {
		StringBuilder builder = new StringBuilder();
		builder.append(getPreamble());
		builder.append("<body><div id=\"CyPlot\" style=\"width:600px;height:600px;\"></div>");
		builder.append("<script> var data = [{ x: " + xArray + ", y: " + yArray + ", type: 'bar'}];");
		builder.append(getLabelCode(xLabel, yLabel));
		builder.append("Plotly.newPlot('CyPlot', data, layout);");
		builder.append(getResizeCode());
		builder.append(getPlotly());
		return builder.toString();
	}
	
	public static String getResizeCode() {
		StringBuilder builder = new StringBuilder();

		builder.append("(function() { ");
		builder.append("var d3 = Plotly.d3;");
		builder.append("var WIDTH_IN_PERCENT_OF_PARENT = 94;");
		builder.append("var HEIGHT_IN_PERCENT_OF_PARENT = 95;");
		builder.append("var gd3 = d3.select(\"div[id='CyPlot']\")");
		//builder.append("var gd3 = d3.select('body').append('CyPlot')");
		builder.append(".style({ width: WIDTH_IN_PERCENT_OF_PARENT + '%',\n" +
				"        'margin-left': (100 - WIDTH_IN_PERCENT_OF_PARENT) / 2 + '%',\n" +
				"\n" +
				"        height: HEIGHT_IN_PERCENT_OF_PARENT + 'vh',\n" +
				"        'margin-top': (100 - HEIGHT_IN_PERCENT_OF_PARENT) / 2 + 'vh'\n" +
				"    });");
		builder.append("var gd = gd3.node();");
		builder.append("window.onresize = function() {Plotly.Plots.resize(gd);};");
		builder.append("})();");

		return builder.toString();
	}


	public static String getClickCode(String plot, String nameSelection) {
		return plot+".on('plotly_click', function(data){ \n ;" +
		       "cybrowser.executeCyCommand('network select nodeList = \"" + nameSelection + ":' +data.points[0].text+'\"');});";
	}

	public static String getLassoCode(String plot, String nameSelection) {
		return	plot+".on('plotly_selected', function(data) { \n ;"+
		        "var nodelist = ''; for(var i = 0; i<data.points.length; i++) { nodelist+= (', "+nameSelection+ ":' +data.points[i].text);};" +
		        "cybrowser.executeCyCommand('network select nodeList = \"'+nodelist+'\"');});";
	}
	
	public static String getLabelCode(String xLabel, String yLabel) {
		return "var layout = {showlegend: true, legend: { x: 1, y: 0.5 }, hovermode: 'closest', xaxis: { title:'" + xLabel + "'}, yaxis: { title:'" + yLabel + "'}, title: '" + xLabel + " vs " + yLabel + "'};";
	}

	public static String getPlotly() {
		return "Plotly.react();"+
		       "</script></body></html>";
	}
}