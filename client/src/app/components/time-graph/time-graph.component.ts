
import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3';
import {scaleTime} from "d3-scale";

@Component({
  selector: 'op-time-graph',
  templateUrl: './time-graph.component.html',
  styleUrls: ['./time-graph.component.scss']
})
export class TimeGraphComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.generateGraph();
  }

  generateGraph() {
    let margin: any = {top: 20, right: 50, bottom: 30, left: 50},
      width: number = 960 - margin.left - margin.right,
      height: number = 500 - margin.top - margin.bottom;
    let timeFormat =  d3.timeParse("%d-%b-%y");
    console.debug('timeformat', timeFormat);
    let parseDate = timeFormat,// d3.time.format("%d-%b-%y").parse,
      bisectDate = d3.bisector((d) => { return d.date; }).left,
      formatValue = d3.format(",.2f"),
      formatCurrency = function(d) { return "$" + formatValue(d); };

    let x = scaleTime().range([0, width]);

    var y = d3.scaleLinear()
      .range([height, 0]);

    var xAxis = d3.axisBottom(x);

    var yAxis = d3.axisLeft(y);

    var line = d3.line()
      .x((d) => {  console.debug('d', d); return x(d.date); })
      .y((d) => { return y(d.close); });

    var svg = d3.select(".time-graph").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)

      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    d3.tsv('data/data.tsv', function(error, data) {
      if (error) throw error;

      data.forEach((d) => {
        d.date = parseDate(d.date);
        d.close = +d.close;
      });

      data.sort(function(a, b) {
        return a.date - b.date;
      });

      x.domain([data[0].date, data[data.length - 1].date]);
      y.domain(d3.extent(data, (d) => { return d.close; }));

      svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

      svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Price ($)");

      svg.append("path")
        .data([data])
        .attr("class", "line")
        .attr('stroke', 'orange')
        .attr('fillOpacity', 0)
        .attr('fill', 'none')
        .attr("d", line)
        .on("mouseover", function() { focus.style("display", null); })
        .on("mouseout", function() { focus.style("display", "none"); })
        .on("mousemove", mousemove);

      var focus = svg.append("g")
        .attr("class", "focus")
        .style("display", "none");

      focus.append("circle")
        .attr("r", 4.5);

      focus.append("text")
        .attr("x", 9)
        .attr("dy", ".35em");

      // svg.append("rect")
      //   .attr("class", "overlay")
      //   .attr("width", width)
      //   .attr("height", height)
      //   .on("mouseover", function() { focus.style("display", null); })
      //   .on("mouseout", function() { focus.style("display", "none"); })
      //   .on("mousemove", mousemove);

      function mousemove() {
        let x0: any = x.invert(d3.mouse(this)[0]),
          i = bisectDate(data, x0, 1),
          d0 = data[i - 1],
          d1 = data[i],
          d = x0 - d0.date > d1.date - x0.getDate() ? d1 : d0;
        focus.attr("transform", "translate(" + x(d.date) + "," + y(d.close) + ")");
        focus.select("text").text(formatCurrency(d.close));
      }
    });
  }

}
