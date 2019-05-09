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
        that.monitorPlayer();
    },
    methods: {
        recoverPlayingStatus: function () {
            var that = this;
            if (audioContext.src === that.data.musicAudioSrc) {
                this.setData({
                    isPlaying: !audioContext.paused
                });
            }
        },
        monitorPlayer: function () {
            var that = this;
            audioContext.onPlay(function () {
                that.recoverPlayingStatus();
            });
            audioContext.onPause(function () {
                that.recoverPlayingStatus();
            });
            audioContext.onStop(function () {
                that.recoverPlayingStatus();
            });
            audioContext.onEnded(function () {
                that.recoverPlayingStatus();
            });
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
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVzaWMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibXVzaWMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0VBQStEO0FBRS9ELElBQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxDQUFBO0FBRWpELFNBQVMsQ0FBQztJQUtSLFNBQVMsRUFBRSxDQUFDLGtDQUFlLENBQUM7SUFDNUIsVUFBVSxFQUFFO1FBQ1YsU0FBUyxFQUFFO1lBQ1QsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsS0FBSztZQUNaLGFBQWEsRUFBRSxFQUFFO1NBQ2xCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsMEJBQTBCO1lBQ2pDLGFBQWEsRUFBRSxFQUFFO1NBQ2xCO1FBQ0QsUUFBUSxFQUFFO1lBQ1IsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsMkJBQTJCO1lBQ2xDLGFBQWEsRUFBRSxFQUFFO1NBQ2xCO1FBQ0QsYUFBYSxFQUFFO1lBQ2IsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsRUFBRTtZQUNULGFBQWEsRUFBRSxFQUFFO1NBQ2xCO0tBQ0Y7SUFLRCxJQUFJLEVBQUUsRUFBRTtJQUVSLFFBQVEsRUFBUjtRQUNFLElBQU0sSUFBSSxHQUFRLElBQUksQ0FBQTtRQUV0QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQTtRQUMzQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDdEIsQ0FBQztJQUtELE9BQU8sRUFBRTtRQUNQLG9CQUFvQixFQUFwQjtZQUNFLElBQU0sSUFBSSxHQUFRLElBQUksQ0FBQTtZQUV0QixJQUFJLFlBQVksQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ2hELElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsU0FBUyxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU07aUJBQ2hDLENBQUMsQ0FBQTthQUNIO1FBQ0gsQ0FBQztRQUVELGFBQWEsRUFBYjtZQUNFLElBQU0sSUFBSSxHQUFRLElBQUksQ0FBQTtZQUV0QixZQUFZLENBQUMsTUFBTSxDQUFDO2dCQUNsQixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQTtZQUM3QixDQUFDLENBQUMsQ0FBQTtZQUNGLFlBQVksQ0FBQyxPQUFPLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFBO1lBQzdCLENBQUMsQ0FBQyxDQUFBO1lBQ0YsWUFBWSxDQUFDLE1BQU0sQ0FBQztnQkFDbEIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUE7WUFDN0IsQ0FBQyxDQUFDLENBQUE7WUFDRixZQUFZLENBQUMsT0FBTyxDQUFDO2dCQUNuQixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQTtZQUM3QixDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUM7UUFFRCxVQUFVLEVBQVY7WUFDRSxJQUFNLElBQUksR0FBUSxJQUFJLENBQUE7WUFHdEIsWUFBWSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQTtZQUUxQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUN2QixZQUFZLENBQUMsS0FBSyxFQUFFLENBQUE7YUFDckI7aUJBQU07Z0JBQ0wsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFBO2FBQ3BCO1FBQ0gsQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXBpc29kZUJlaGF2aW9yIH0gZnJvbSAnLi4vYmVoYXZpb3JzL2VwaXNvZGUuYmVoYXZpb3InXG5cbmNvbnN0IGF1ZGlvQ29udGV4dCA9IHd4LmNyZWF0ZUlubmVyQXVkaW9Db250ZXh0KClcblxuQ29tcG9uZW50KHtcbiAgLyoqXG4gICAqIOe7hOS7tueahOWxnuaAp+WIl+ihqFxuICAgKi9cblxuICBiZWhhdmlvcnM6IFtlcGlzb2RlQmVoYXZpb3JdLFxuICBwcm9wZXJ0aWVzOiB7XG4gICAgaXNQbGF5aW5nOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgb3B0aW9uYWxUeXBlczogW11cbiAgICB9LFxuICAgIHBsYXlJbWc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnLi9pbWFnZXMvcGxheWVyQHBsYXkucG5nJyxcbiAgICAgIG9wdGlvbmFsVHlwZXM6IFtdXG4gICAgfSxcbiAgICBwYXVzZUltZzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICcuL2ltYWdlcy9wbGF5ZXJAcGF1c2UucG5nJyxcbiAgICAgIG9wdGlvbmFsVHlwZXM6IFtdXG4gICAgfSxcbiAgICBtdXNpY0F1ZGlvU3JjOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJycsXG4gICAgICBvcHRpb25hbFR5cGVzOiBbXVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICog57uE5Lu255qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7fSxcblxuICBhdHRhY2hlZCgpIHtcbiAgICBjb25zdCB0aGF0OiBhbnkgPSB0aGlzXG5cbiAgICB0aGF0LnJlY292ZXJQbGF5aW5nU3RhdHVzKClcbiAgICB0aGF0Lm1vbml0b3JQbGF5ZXIoKVxuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTmlrnms5XliJfooahcbiAgICovXG4gIG1ldGhvZHM6IHtcbiAgICByZWNvdmVyUGxheWluZ1N0YXR1cygpIHtcbiAgICAgIGNvbnN0IHRoYXQ6IGFueSA9IHRoaXNcblxuICAgICAgaWYgKGF1ZGlvQ29udGV4dC5zcmMgPT09IHRoYXQuZGF0YS5tdXNpY0F1ZGlvU3JjKSB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgaXNQbGF5aW5nOiAhYXVkaW9Db250ZXh0LnBhdXNlZFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBtb25pdG9yUGxheWVyKCkge1xuICAgICAgY29uc3QgdGhhdDogYW55ID0gdGhpc1xuXG4gICAgICBhdWRpb0NvbnRleHQub25QbGF5KCgpID0+IHtcbiAgICAgICAgdGhhdC5yZWNvdmVyUGxheWluZ1N0YXR1cygpXG4gICAgICB9KVxuICAgICAgYXVkaW9Db250ZXh0Lm9uUGF1c2UoKCkgPT4ge1xuICAgICAgICB0aGF0LnJlY292ZXJQbGF5aW5nU3RhdHVzKClcbiAgICAgIH0pXG4gICAgICBhdWRpb0NvbnRleHQub25TdG9wKCgpID0+IHtcbiAgICAgICAgdGhhdC5yZWNvdmVyUGxheWluZ1N0YXR1cygpXG4gICAgICB9KVxuICAgICAgYXVkaW9Db250ZXh0Lm9uRW5kZWQoKCkgPT4ge1xuICAgICAgICB0aGF0LnJlY292ZXJQbGF5aW5nU3RhdHVzKClcbiAgICAgIH0pXG4gICAgfSxcblxuICAgIHRvZ2dsZVBsYXkoKSB7XG4gICAgICBjb25zdCB0aGF0OiBhbnkgPSB0aGlzXG5cbiAgICAgIC8vIHNldGluZyBhdWRpbyBzcmNcbiAgICAgIGF1ZGlvQ29udGV4dC5zcmMgPSB0aGF0LmRhdGEubXVzaWNBdWRpb1NyY1xuXG4gICAgICBpZiAodGhhdC5kYXRhLmlzUGxheWluZykge1xuICAgICAgICBhdWRpb0NvbnRleHQucGF1c2UoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXVkaW9Db250ZXh0LnBsYXkoKVxuICAgICAgfVxuICAgIH1cbiAgfVxufSlcbiJdfQ==