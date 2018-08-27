ui.UiFactory.layouts.languageMenuLayout = {
  "type": "ui.FreeLayout",
  "frame": [0, 0, Graphics.width, Graphics.height],
  "music": $(function() {
    return $dataFields.database.system.languageMusic;
  }),
  "preload": {
    "sounds": [
      function() {
        return $dataFields.database.system.menuSelectSound;
      }, function() {
        return $dataFields.database.system.menuCancelSound;
      }, function() {
        return $dataFields.database.system.menuQuitSound;
      }, function() {
        return $dataFields.database.system.menuLoadSound;
      }, function() {
        return $dataFields.database.system.menuSaveSound;
      }
    ]
  },
  "controls": [
    {
      "type": "ui.Image",
      "image": function() {
        return $dataFields.database.system.languageScreen.name || 'bg-generic';
      },
      "frame": [0, 0, Graphics.width, Graphics.height]
    }, {
      "type": "ui.StackLayout",
      "orientation": "vertical",
      "alignmentX": "center",
      "alignmentY": "center",
      "sizeToFit": true,
      "dataField": $(function() {
        return $dataFields.languages;
      }),
      "template": {
        "type": "ui.FreeLayout",
        "resizable": false,
        "anchor": [0.5, 0.5],
        "animations2": [
          {
            "event": "onTerminate",
            "condition": $(function() {
              return s.index > o.index;
            }),
            "flow": [
              {
                "type": "disappear",
                "animation": {
                  "type": 0,
                  "movement": 1
                },
                "duration": 30,
                "easing": "cubic_in",
                "wait": true
              }
            ]
          }, {
            "event": "onTerminate",
            "condition": {
              "if": $(function() {
                return o.index < t.index;
              }),
              "target": $(function() {
                return o.parent.subObjects;
              })
            },
            "flow": [
              {
                "type": "disappear",
                "animation": {
                  "type": 1,
                  "movement": 3
                },
                "duration": 30,
                "easing": "cubic_in",
                "wait": true
              }
            ]
          }, {
            "event": "onTerminate",
            "condition": {
              "if": $(function() {
                return o === t;
              }),
              "target": $(function() {
                return o.parent.subObjects;
              })
            },
            "flow": [
              {
                "type": "zoomTo",
                "zoom": [150, 150],
                "duration": 30,
                "wait": false
              }, {
                "type": "disappear",
                "animation": {
                  "type": 1
                },
                "duration": 30,
                "easing": "cubic_in",
                "wait": true
              }
            ]
          }
        ],
        "frame": [0, 0, 300, 50],
        "margin": [0, 0, 0, 15],
        "controls": [
          {
            "type": "ui.SelectableWindow",
            "frame": [0, 0, "100%", "100%"],
            "inheritProperties": true,
            "margin": [0, 0, 0, 0],
            "params": {
              "actions": [
                {
                  "name": "selectLanguage",
                  "params": $(function() {
                    return o.parent.parent.index;
                  })
                }, {
                  "name": "switchLayout",
                  "params": {
                    "name": "titleLayout"
                  }
                }
              ]
            },
            "zIndex": 4999
          }, {
            "type": "ui.Image",
            "imageFolder": "Graphics/Icons",
            "formulas": [
              $(function() {
                return o.image = $dataFields.languages[o.parent.index].icon.name;
              })
            ],
            "alignmentY": "center",
            "frame": [10, 0],
            "zIndex": "5100",
            "anchor": [0.5, 0.5],
            "sizeToFit": true
          }, {
            "type": "ui.Text",
            "sizeToFit": true,
            "styles": ["regularUIText"],
            "alignmentX": "center",
            "alignmentY": "center",
            "frame": [0, 0],
            "inheritProperties": true,
            "margin": [0, 0, 0, 0],
            "formulas": [
              $(function() {
                return o.text = $dataFields.languages[o.parent.index].name;
              })
            ],
            "zIndex": 5100
          }
        ]
      }
    }
  ]
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGtCQUFyQixHQUEwQztFQUN0QyxNQUFBLEVBQVEsZUFEOEI7RUFFdEMsT0FBQSxFQUFTLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxRQUFRLENBQUMsS0FBaEIsRUFBdUIsUUFBUSxDQUFDLE1BQWhDLENBRjZCO0VBR3RDLE9BQUEsRUFBVSxDQUFBLENBQUUsU0FBQTtXQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO0VBQS9CLENBQUYsQ0FINEI7RUFJdEMsU0FBQSxFQUFXO0lBQ1AsUUFBQSxFQUFVO01BQ04sU0FBQTtlQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO01BQS9CLENBRE0sRUFFTixTQUFBO2VBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7TUFBL0IsQ0FGTSxFQUdOLFNBQUE7ZUFBRyxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztNQUEvQixDQUhNLEVBSU4sU0FBQTtlQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO01BQS9CLENBSk0sRUFLTixTQUFBO2VBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7TUFBL0IsQ0FMTTtLQURIO0dBSjJCO0VBYXRDLFVBQUEsRUFBWTtJQUNSO01BQ0ksTUFBQSxFQUFRLFVBRFo7TUFFSSxPQUFBLEVBQVMsU0FBQTtlQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUEzQyxJQUFtRDtNQUF0RCxDQUZiO01BR0ksT0FBQSxFQUFTLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxRQUFRLENBQUMsS0FBaEIsRUFBdUIsUUFBUSxDQUFDLE1BQWhDLENBSGI7S0FEUSxFQU1SO01BQ0ksTUFBQSxFQUFRLGdCQURaO01BRUksYUFBQSxFQUFlLFVBRm5C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QUFBLEVBQVUsSUFWZDtXQXhCTztTQTlCSDtPQVBoQjtLQU5RO0dBYjBCIiwic291cmNlc0NvbnRlbnQiOlsiXG51aS5VaUZhY3RvcnkubGF5b3V0cy5sYW5ndWFnZU1lbnVMYXlvdXQgPSB7XG4gICAgXCJ0eXBlXCI6IFwidWkuRnJlZUxheW91dFwiLFxuICAgIFwiZnJhbWVcIjogWzAsIDAsIEdyYXBoaWNzLndpZHRoLCBHcmFwaGljcy5oZWlnaHRdLFxuICAgIFwibXVzaWNcIjogKCQgLT4gJGRhdGFGaWVsZHMuZGF0YWJhc2Uuc3lzdGVtLmxhbmd1YWdlTXVzaWMpLFxuICAgIFwicHJlbG9hZFwiOiB7XG4gICAgICAgIFwic291bmRzXCI6IFtcbiAgICAgICAgICAgIC0+ICRkYXRhRmllbGRzLmRhdGFiYXNlLnN5c3RlbS5tZW51U2VsZWN0U291bmQsXG4gICAgICAgICAgICAtPiAkZGF0YUZpZWxkcy5kYXRhYmFzZS5zeXN0ZW0ubWVudUNhbmNlbFNvdW5kLFxuICAgICAgICAgICAgLT4gJGRhdGFGaWVsZHMuZGF0YWJhc2Uuc3lzdGVtLm1lbnVRdWl0U291bmQsXG4gICAgICAgICAgICAtPiAkZGF0YUZpZWxkcy5kYXRhYmFzZS5zeXN0ZW0ubWVudUxvYWRTb3VuZCxcbiAgICAgICAgICAgIC0+ICRkYXRhRmllbGRzLmRhdGFiYXNlLnN5c3RlbS5tZW51U2F2ZVNvdW5kXG4gICAgICAgIF1cbiAgICB9LFxuICAgIFwiY29udHJvbHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJ1aS5JbWFnZVwiLFxuICAgICAgICAgICAgXCJpbWFnZVwiOiAtPiAkZGF0YUZpZWxkcy5kYXRhYmFzZS5zeXN0ZW0ubGFuZ3VhZ2VTY3JlZW4ubmFtZSBvciAnYmctZ2VuZXJpYycsXG4gICAgICAgICAgICBcImZyYW1lXCI6IFswLCAwLCBHcmFwaGljcy53aWR0aCwgR3JhcGhpY3MuaGVpZ2h0XVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJ1aS5TdGFja0xheW91dFwiLFxuICAgICAgICAgICAgXCJvcmllbnRhdGlvblwiOiBcInZlcnRpY2FsXCIsXG4gICAgICAgICAgICBcImFsaWdubWVudFhcIjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIFwiYWxpZ25tZW50WVwiOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgXCJzaXplVG9GaXRcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZGF0YUZpZWxkXCI6ICQgLT4gJGRhdGFGaWVsZHMubGFuZ3VhZ2VzXG4gICAgICAgICAgICBcInRlbXBsYXRlXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ1aS5GcmVlTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgXCJyZXNpemFibGVcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJhbmNob3JcIjogWzAuNSwgMC41XSxcbiAgICAgICAgICAgICAgICBcImFuaW1hdGlvbnMyXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJldmVudFwiOiBcIm9uVGVybWluYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbmRpdGlvblwiOiAoJCAtPiBzLmluZGV4ID4gby5pbmRleCkgICN7IFwiaWZcIjogKCQgLT4gby5pbmRleCA+IHQuaW5kZXgpLCBcInRhcmdldFwiOiAoJCAtPiBvLnBhcmVudC5zdWJPYmplY3RzKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmbG93XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwidHlwZVwiOiBcImRpc2FwcGVhclwiLCBcImFuaW1hdGlvblwiOiB7IFwidHlwZVwiOiAwLCBcIm1vdmVtZW50XCI6IDEgfSwgXCJkdXJhdGlvblwiOiAzMCwgXCJlYXNpbmdcIjogXCJjdWJpY19pblwiLCBcIndhaXRcIjogdHJ1ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXZlbnRcIjogXCJvblRlcm1pbmF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb25kaXRpb25cIjogeyBcImlmXCI6ICgkIC0+IG8uaW5kZXggPCB0LmluZGV4KSwgXCJ0YXJnZXRcIjogKCQgLT4gby5wYXJlbnQuc3ViT2JqZWN0cykgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZmxvd1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcInR5cGVcIjogXCJkaXNhcHBlYXJcIiwgXCJhbmltYXRpb25cIjogeyBcInR5cGVcIjogMSwgXCJtb3ZlbWVudFwiOiAzIH0sIFwiZHVyYXRpb25cIjogMzAsIFwiZWFzaW5nXCI6IFwiY3ViaWNfaW5cIiwgXCJ3YWl0XCI6IHRydWUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImV2ZW50XCI6IFwib25UZXJtaW5hdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29uZGl0aW9uXCI6IHsgXCJpZlwiOiAoJCAtPiBvID09IHQpLCBcInRhcmdldFwiOiAoJCAtPiBvLnBhcmVudC5zdWJPYmplY3RzKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmbG93XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwidHlwZVwiOiBcInpvb21Ub1wiLCBcInpvb21cIjogWzE1MCwgMTUwXSwgXCJkdXJhdGlvblwiOiAzMCwgXCJ3YWl0XCI6IGZhbHNlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcInR5cGVcIjogXCJkaXNhcHBlYXJcIiwgXCJhbmltYXRpb25cIjogeyBcInR5cGVcIjogMSB9LCBcImR1cmF0aW9uXCI6IDMwLCBcImVhc2luZ1wiOiBcImN1YmljX2luXCIsIFwid2FpdFwiOiB0cnVlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJmcmFtZVwiOiBbMCwgMCwgMzAwLCA1MF0sXG4gICAgICAgICAgICAgICAgXCJtYXJnaW5cIjogWzAsIDAsIDAsIDE1XSxcbiAgICAgICAgICAgICAgICBcImNvbnRyb2xzXCI6W1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ1aS5TZWxlY3RhYmxlV2luZG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZyYW1lXCI6IFswLCAwLCBcIjEwMCVcIiwgXCIxMDAlXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpbmhlcml0UHJvcGVydGllc1wiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW5cIjogWzAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXJhbXNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwic2VsZWN0TGFuZ3VhZ2VcIiwgXCJwYXJhbXNcIjogKCQgLT4gby5wYXJlbnQucGFyZW50LmluZGV4KSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwibmFtZVwiOiBcInN3aXRjaExheW91dFwiLCBcInBhcmFtc1wiOiB7IFwibmFtZVwiOiBcInRpdGxlTGF5b3V0XCIgfSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInpJbmRleFwiOiA0OTk5XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInVpLkltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImltYWdlRm9sZGVyXCI6IFwiR3JhcGhpY3MvSWNvbnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9ybXVsYXNcIjogWyQgLT4gby5pbWFnZSA9ICRkYXRhRmllbGRzLmxhbmd1YWdlc1tvLnBhcmVudC5pbmRleF0uaWNvbi5uYW1lXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxpZ25tZW50WVwiOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmcmFtZVwiOiBbMTAsIDBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ6SW5kZXhcIjogXCI1MTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFuY2hvclwiOiBbMC41LCAwLjVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplVG9GaXRcIjogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ1aS5UZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNpemVUb0ZpdFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZXNcIjogW1wicmVndWxhclVJVGV4dFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxpZ25tZW50WFwiOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGlnbm1lbnRZXCI6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZyYW1lXCI6IFswLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaW5oZXJpdFByb3BlcnRpZXNcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWFyZ2luXCI6IFswLCAwLCAwLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9ybXVsYXNcIjogWyQgLT4gby50ZXh0ID0gJGRhdGFGaWVsZHMubGFuZ3VhZ2VzW28ucGFyZW50LmluZGV4XS5uYW1lXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiekluZGV4XCI6IDUxMDBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgXVxufVxuXG4iXX0=
//# sourceURL=Layout_LanguageMenu_119.js