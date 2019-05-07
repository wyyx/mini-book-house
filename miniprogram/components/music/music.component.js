"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var episode_behavior_1 = require("../behaviors/episode.behavior");
Component({
    behaviors: [episode_behavior_1.episodeBehavior],
    properties: {
        isPlaying: {
            type: Boolean,
            value: false,
            optionalTypes: []
        },
        playImg: {
            type: String,
            value: './images/player@play.png',
            optionalTypes: []
        },
        pauseImg: {
            type: String,
            value: './images/player@pause.png',
            optionalTypes: []
        }
    },
    data: {},
    methods: {
        togglePlay: function () {
            var that = this;
            this.setData({
                isPlaying: that.data.isPlaying ? false : true
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVzaWMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibXVzaWMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0VBQStEO0FBRS9ELFNBQVMsQ0FBQztJQUtSLFNBQVMsRUFBRSxDQUFDLGtDQUFlLENBQUM7SUFDNUIsVUFBVSxFQUFFO1FBQ1YsU0FBUyxFQUFFO1lBQ1QsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsS0FBSztZQUNaLGFBQWEsRUFBRSxFQUFFO1NBQ2xCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsMEJBQTBCO1lBQ2pDLGFBQWEsRUFBRSxFQUFFO1NBQ2xCO1FBQ0QsUUFBUSxFQUFFO1lBQ1IsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsMkJBQTJCO1lBQ2xDLGFBQWEsRUFBRSxFQUFFO1NBQ2xCO0tBQ0Y7SUFLRCxJQUFJLEVBQUUsRUFBRTtJQUtSLE9BQU8sRUFBRTtRQUNQLFVBQVUsRUFBVjtZQUNFLElBQU0sSUFBSSxHQUFRLElBQUksQ0FBQTtZQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJO2FBQzlDLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVwaXNvZGVCZWhhdmlvciB9IGZyb20gJy4uL2JlaGF2aW9ycy9lcGlzb2RlLmJlaGF2aW9yJ1xuXG5Db21wb25lbnQoe1xuICAvKipcbiAgICog57uE5Lu255qE5bGe5oCn5YiX6KGoXG4gICAqL1xuXG4gIGJlaGF2aW9yczogW2VwaXNvZGVCZWhhdmlvcl0sXG4gIHByb3BlcnRpZXM6IHtcbiAgICBpc1BsYXlpbmc6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICBvcHRpb25hbFR5cGVzOiBbXVxuICAgIH0sXG4gICAgcGxheUltZzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICcuL2ltYWdlcy9wbGF5ZXJAcGxheS5wbmcnLFxuICAgICAgb3B0aW9uYWxUeXBlczogW11cbiAgICB9LFxuICAgIHBhdXNlSW1nOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJy4vaW1hZ2VzL3BsYXllckBwYXVzZS5wbmcnLFxuICAgICAgb3B0aW9uYWxUeXBlczogW11cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIOe7hOS7tueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge30sXG5cbiAgLyoqXG4gICAqIOe7hOS7tueahOaWueazleWIl+ihqFxuICAgKi9cbiAgbWV0aG9kczoge1xuICAgIHRvZ2dsZVBsYXkoKSB7XG4gICAgICBjb25zdCB0aGF0OiBhbnkgPSB0aGlzXG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBpc1BsYXlpbmc6IHRoYXQuZGF0YS5pc1BsYXlpbmcgPyBmYWxzZSA6IHRydWVcbiAgICAgIH0pXG4gICAgfVxuICB9XG59KVxuIl19