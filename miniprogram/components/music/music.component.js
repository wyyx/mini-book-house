"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var episode_behavior_1 = require("../behaviors/episode.behavior");
var audioContext = wx.createInnerAudioContext();
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
        },
        musicAudioSrc: {
            type: String,
            value: '',
            optionalTypes: []
        }
    },
    data: {},
    attached: function () {
        var that = this;
        that.recoverPlayingStatus();
    },
    methods: {
        recoverPlayingStatus: function () {
            var that = this;
            if (audioContext.src === that.data.musicAudioSrc) {
                this.setData({
                    isPlaying: true
                });
            }
        },
        togglePlay: function () {
            var that = this;
            audioContext.src = that.data.musicAudioSrc;
            if (that.data.isPlaying) {
                audioContext.pause();
            }
            else {
                audioContext.play();
            }
            this.setData({
                isPlaying: that.data.isPlaying ? false : true
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVzaWMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibXVzaWMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0VBQStEO0FBRS9ELElBQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxDQUFBO0FBRWpELFNBQVMsQ0FBQztJQUtSLFNBQVMsRUFBRSxDQUFDLGtDQUFlLENBQUM7SUFDNUIsVUFBVSxFQUFFO1FBQ1YsU0FBUyxFQUFFO1lBQ1QsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsS0FBSztZQUNaLGFBQWEsRUFBRSxFQUFFO1NBQ2xCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsMEJBQTBCO1lBQ2pDLGFBQWEsRUFBRSxFQUFFO1NBQ2xCO1FBQ0QsUUFBUSxFQUFFO1lBQ1IsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsMkJBQTJCO1lBQ2xDLGFBQWEsRUFBRSxFQUFFO1NBQ2xCO1FBQ0QsYUFBYSxFQUFFO1lBQ2IsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsRUFBRTtZQUNULGFBQWEsRUFBRSxFQUFFO1NBQ2xCO0tBQ0Y7SUFLRCxJQUFJLEVBQUUsRUFBRTtJQUVSLFFBQVEsRUFBUjtRQUNFLElBQU0sSUFBSSxHQUFRLElBQUksQ0FBQTtRQUV0QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQTtJQUM3QixDQUFDO0lBS0QsT0FBTyxFQUFFO1FBQ1Asb0JBQW9CLEVBQXBCO1lBQ0UsSUFBTSxJQUFJLEdBQVEsSUFBSSxDQUFBO1lBRXRCLElBQUksWUFBWSxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxTQUFTLEVBQUUsSUFBSTtpQkFDaEIsQ0FBQyxDQUFBO2FBQ0g7UUFDSCxDQUFDO1FBRUQsVUFBVSxFQUFWO1lBQ0UsSUFBTSxJQUFJLEdBQVEsSUFBSSxDQUFBO1lBR3RCLFlBQVksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUE7WUFFMUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDdkIsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFBO2FBQ3JCO2lCQUFNO2dCQUNMLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQTthQUNwQjtZQUVELElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUk7YUFDOUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXBpc29kZUJlaGF2aW9yIH0gZnJvbSAnLi4vYmVoYXZpb3JzL2VwaXNvZGUuYmVoYXZpb3InXG5cbmNvbnN0IGF1ZGlvQ29udGV4dCA9IHd4LmNyZWF0ZUlubmVyQXVkaW9Db250ZXh0KClcblxuQ29tcG9uZW50KHtcbiAgLyoqXG4gICAqIOe7hOS7tueahOWxnuaAp+WIl+ihqFxuICAgKi9cblxuICBiZWhhdmlvcnM6IFtlcGlzb2RlQmVoYXZpb3JdLFxuICBwcm9wZXJ0aWVzOiB7XG4gICAgaXNQbGF5aW5nOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgb3B0aW9uYWxUeXBlczogW11cbiAgICB9LFxuICAgIHBsYXlJbWc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnLi9pbWFnZXMvcGxheWVyQHBsYXkucG5nJyxcbiAgICAgIG9wdGlvbmFsVHlwZXM6IFtdXG4gICAgfSxcbiAgICBwYXVzZUltZzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICcuL2ltYWdlcy9wbGF5ZXJAcGF1c2UucG5nJyxcbiAgICAgIG9wdGlvbmFsVHlwZXM6IFtdXG4gICAgfSxcbiAgICBtdXNpY0F1ZGlvU3JjOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJycsXG4gICAgICBvcHRpb25hbFR5cGVzOiBbXVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICog57uE5Lu255qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7fSxcblxuICBhdHRhY2hlZCgpIHtcbiAgICBjb25zdCB0aGF0OiBhbnkgPSB0aGlzXG5cbiAgICB0aGF0LnJlY292ZXJQbGF5aW5nU3RhdHVzKClcbiAgfSxcblxuICAvKipcbiAgICog57uE5Lu255qE5pa55rOV5YiX6KGoXG4gICAqL1xuICBtZXRob2RzOiB7XG4gICAgcmVjb3ZlclBsYXlpbmdTdGF0dXMoKSB7XG4gICAgICBjb25zdCB0aGF0OiBhbnkgPSB0aGlzXG5cbiAgICAgIGlmIChhdWRpb0NvbnRleHQuc3JjID09PSB0aGF0LmRhdGEubXVzaWNBdWRpb1NyYykge1xuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIGlzUGxheWluZzogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0sXG5cbiAgICB0b2dnbGVQbGF5KCkge1xuICAgICAgY29uc3QgdGhhdDogYW55ID0gdGhpc1xuXG4gICAgICAvLyBzZXRpbmcgYXVkaW8gc3JjXG4gICAgICBhdWRpb0NvbnRleHQuc3JjID0gdGhhdC5kYXRhLm11c2ljQXVkaW9TcmNcblxuICAgICAgaWYgKHRoYXQuZGF0YS5pc1BsYXlpbmcpIHtcbiAgICAgICAgYXVkaW9Db250ZXh0LnBhdXNlKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF1ZGlvQ29udGV4dC5wbGF5KClcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgaXNQbGF5aW5nOiB0aGF0LmRhdGEuaXNQbGF5aW5nID8gZmFsc2UgOiB0cnVlXG4gICAgICB9KVxuICAgIH1cbiAgfVxufSlcbiJdfQ==