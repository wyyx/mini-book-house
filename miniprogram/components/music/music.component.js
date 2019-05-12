"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var episode_behavior_1 = require("../behaviors/episode.behavior");
var audio_util_1 = require("../../utils/audio.util");
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
            if (audio_util_1.audioContext.src === that.data.musicAudioSrc) {
                this.setData({
                    isPlaying: !audio_util_1.audioContext.paused
                });
            }
        },
        monitorPlayer: function () {
            var that = this;
            audio_util_1.audioContext.onPlay(function () {
                that.recoverPlayingStatus();
            });
            audio_util_1.audioContext.onPause(function () {
                that.recoverPlayingStatus();
            });
            audio_util_1.audioContext.onStop(function () {
                that.recoverPlayingStatus();
            });
            audio_util_1.audioContext.onEnded(function () {
                that.recoverPlayingStatus();
            });
        },
        togglePlay: function () {
            var that = this;
            audio_util_1.audioContext.src = that.data.musicAudioSrc;
            if (that.data.isPlaying) {
                audio_util_1.audioContext.pause();
            }
            else {
                audio_util_1.audioContext.play();
            }
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVzaWMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibXVzaWMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0VBQStEO0FBQy9ELHFEQUFxRDtBQUVyRCxTQUFTLENBQUM7SUFLUixTQUFTLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO0lBQzVCLFVBQVUsRUFBRTtRQUNWLFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7WUFDWixhQUFhLEVBQUUsRUFBRTtTQUNsQjtRQUNELE9BQU8sRUFBRTtZQUNQLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLDBCQUEwQjtZQUNqQyxhQUFhLEVBQUUsRUFBRTtTQUNsQjtRQUNELFFBQVEsRUFBRTtZQUNSLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLDJCQUEyQjtZQUNsQyxhQUFhLEVBQUUsRUFBRTtTQUNsQjtRQUNELGFBQWEsRUFBRTtZQUNiLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLEVBQUU7WUFDVCxhQUFhLEVBQUUsRUFBRTtTQUNsQjtLQUNGO0lBS0QsSUFBSSxFQUFFLEVBQUU7SUFFUixRQUFRLEVBQVI7UUFDRSxJQUFNLElBQUksR0FBUSxJQUFJLENBQUE7UUFFdEIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUE7UUFDM0IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQ3RCLENBQUM7SUFLRCxPQUFPLEVBQUU7UUFDUCxvQkFBb0IsRUFBcEI7WUFDRSxJQUFNLElBQUksR0FBUSxJQUFJLENBQUE7WUFFdEIsSUFBSSx5QkFBWSxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxTQUFTLEVBQUUsQ0FBQyx5QkFBWSxDQUFDLE1BQU07aUJBQ2hDLENBQUMsQ0FBQTthQUNIO1FBQ0gsQ0FBQztRQUVELGFBQWEsRUFBYjtZQUNFLElBQU0sSUFBSSxHQUFRLElBQUksQ0FBQTtZQUV0Qix5QkFBWSxDQUFDLE1BQU0sQ0FBQztnQkFDbEIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUE7WUFDN0IsQ0FBQyxDQUFDLENBQUE7WUFDRix5QkFBWSxDQUFDLE9BQU8sQ0FBQztnQkFDbkIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUE7WUFDN0IsQ0FBQyxDQUFDLENBQUE7WUFDRix5QkFBWSxDQUFDLE1BQU0sQ0FBQztnQkFDbEIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUE7WUFDN0IsQ0FBQyxDQUFDLENBQUE7WUFDRix5QkFBWSxDQUFDLE9BQU8sQ0FBQztnQkFDbkIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUE7WUFDN0IsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDO1FBRUQsVUFBVSxFQUFWO1lBQ0UsSUFBTSxJQUFJLEdBQVEsSUFBSSxDQUFBO1lBR3RCLHlCQUFZLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFBO1lBRTFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ3ZCLHlCQUFZLENBQUMsS0FBSyxFQUFFLENBQUE7YUFDckI7aUJBQU07Z0JBQ0wseUJBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQTthQUNwQjtRQUNILENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVwaXNvZGVCZWhhdmlvciB9IGZyb20gJy4uL2JlaGF2aW9ycy9lcGlzb2RlLmJlaGF2aW9yJ1xuaW1wb3J0IHsgYXVkaW9Db250ZXh0IH0gZnJvbSAnLi4vLi4vdXRpbHMvYXVkaW8udXRpbCdcblxuQ29tcG9uZW50KHtcbiAgLyoqXG4gICAqIOe7hOS7tueahOWxnuaAp+WIl+ihqFxuICAgKi9cblxuICBiZWhhdmlvcnM6IFtlcGlzb2RlQmVoYXZpb3JdLFxuICBwcm9wZXJ0aWVzOiB7XG4gICAgaXNQbGF5aW5nOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgb3B0aW9uYWxUeXBlczogW11cbiAgICB9LFxuICAgIHBsYXlJbWc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnLi9pbWFnZXMvcGxheWVyQHBsYXkucG5nJyxcbiAgICAgIG9wdGlvbmFsVHlwZXM6IFtdXG4gICAgfSxcbiAgICBwYXVzZUltZzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICcuL2ltYWdlcy9wbGF5ZXJAcGF1c2UucG5nJyxcbiAgICAgIG9wdGlvbmFsVHlwZXM6IFtdXG4gICAgfSxcbiAgICBtdXNpY0F1ZGlvU3JjOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJycsXG4gICAgICBvcHRpb25hbFR5cGVzOiBbXVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICog57uE5Lu255qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7fSxcblxuICBhdHRhY2hlZCgpIHtcbiAgICBjb25zdCB0aGF0OiBhbnkgPSB0aGlzXG5cbiAgICB0aGF0LnJlY292ZXJQbGF5aW5nU3RhdHVzKClcbiAgICB0aGF0Lm1vbml0b3JQbGF5ZXIoKVxuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTmlrnms5XliJfooahcbiAgICovXG4gIG1ldGhvZHM6IHtcbiAgICByZWNvdmVyUGxheWluZ1N0YXR1cygpIHtcbiAgICAgIGNvbnN0IHRoYXQ6IGFueSA9IHRoaXNcblxuICAgICAgaWYgKGF1ZGlvQ29udGV4dC5zcmMgPT09IHRoYXQuZGF0YS5tdXNpY0F1ZGlvU3JjKSB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgaXNQbGF5aW5nOiAhYXVkaW9Db250ZXh0LnBhdXNlZFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBtb25pdG9yUGxheWVyKCkge1xuICAgICAgY29uc3QgdGhhdDogYW55ID0gdGhpc1xuXG4gICAgICBhdWRpb0NvbnRleHQub25QbGF5KCgpID0+IHtcbiAgICAgICAgdGhhdC5yZWNvdmVyUGxheWluZ1N0YXR1cygpXG4gICAgICB9KVxuICAgICAgYXVkaW9Db250ZXh0Lm9uUGF1c2UoKCkgPT4ge1xuICAgICAgICB0aGF0LnJlY292ZXJQbGF5aW5nU3RhdHVzKClcbiAgICAgIH0pXG4gICAgICBhdWRpb0NvbnRleHQub25TdG9wKCgpID0+IHtcbiAgICAgICAgdGhhdC5yZWNvdmVyUGxheWluZ1N0YXR1cygpXG4gICAgICB9KVxuICAgICAgYXVkaW9Db250ZXh0Lm9uRW5kZWQoKCkgPT4ge1xuICAgICAgICB0aGF0LnJlY292ZXJQbGF5aW5nU3RhdHVzKClcbiAgICAgIH0pXG4gICAgfSxcblxuICAgIHRvZ2dsZVBsYXkoKSB7XG4gICAgICBjb25zdCB0aGF0OiBhbnkgPSB0aGlzXG5cbiAgICAgIC8vIHNldGluZyBhdWRpbyBzcmNcbiAgICAgIGF1ZGlvQ29udGV4dC5zcmMgPSB0aGF0LmRhdGEubXVzaWNBdWRpb1NyY1xuXG4gICAgICBpZiAodGhhdC5kYXRhLmlzUGxheWluZykge1xuICAgICAgICBhdWRpb0NvbnRleHQucGF1c2UoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXVkaW9Db250ZXh0LnBsYXkoKVxuICAgICAgfVxuICAgIH1cbiAgfVxufSlcbiJdfQ==