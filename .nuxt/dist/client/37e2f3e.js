(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{257:function(t,e,n){"use strict";n.r(e);n(34),n(148);var r={data:function(){return{startDate:"2021-02-01",endDate:"2021-05-01",days:0,differentDays:0,pastDays:0}},mounted:function(){this.generateRandomEnd(),this.setDays()},methods:{generateRandomEnd:function(){var t=Math.floor(3*Math.random())+5,e=Math.floor(30*Math.random());t<10&&(t="0"+t),e<10&&(e="0"+e),this.endDate="2021-"+t+"-"+e},setDays:function(){var t=new Date,e=this.startDate,n=this.endDate,r=(new Date(n)-new Date(t.toISOString().split("T")[0]))/864e5;this.days=r;var o=(new Date(n)-new Date(e))/864e5;this.differentDays=o,this.pastDays=this.differentDays-this.days}}},o=n(21),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"job-description"},[t._m(0),t._v(" "),n("div",{staticClass:"content time"},[n("h3",[t._v(t._s(t.days)+" days left")]),t._v(" "),n("progress",{staticClass:"progress is-success is-small",attrs:{max:t.differentDays},domProps:{value:t.pastDays}}),t._v(" "),n("div",{staticClass:"date"},[n("p",{staticClass:"start-date"},[t._v("\n        Start date: "),n("span",[t._v(t._s(t.startDate))])]),t._v(" "),n("p",{staticClass:"end-date"},[t._v("\n        End date: "),n("span",[t._v(t._s(t.endDate))])]),t._v(" "),t._m(1),t._v(" "),t._m(2)])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("h3",[t._v("Job Description")]),t._v(" "),n("p",[t._v("\n      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam praesentium eaque iusto repudiandae facere necessitatibus quo cupiditate eos non delectus voluptatibus ex in nostrum, deserunt, exercitationem inventore ut qui! Magnam.\n    ")]),t._v(" "),n("p",[t._v("\n      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem quo dignissimos ad dolor pariatur nemo. Voluptatum consequuntur distinctio omnis, ex libero aspernatur, animi natus odit mollitia tenetur quaerat dolor dolorem.\n    ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"end-date"},[t._v("\n        Division: "),n("span",[t._v("SPIRIANT Sales")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"end-date"},[t._v("\n        Experience: "),n("span",[t._v("Junior 3-5 years")])])}],!1,null,null,null);e.default=component.exports}}]);