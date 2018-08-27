ui.UiFactory.customTypes["ui.SettingsMenuSlider"] = {
  "type": "ui.StackLayout",
  "sizeToFit": true,
  "orientation": "vertical",
  "margin": [10, 10, 0, 0],
  "controls": [
    {
      "type": "ui.Text",
      "text": function() {
        return p.label;
      },
      "styles": ["regularUIText"],
      "frame": [0, 0, 200, gs.UIConstants.OPTION_BUTTON_H - 40],
      "margin": [0, 0, 50, 0]
    }, {
      "type": "ui.Slider",
      "id": function() {
        return p.id;
      },
      "frame": [80, 0, gs.UIConstants.LAYOUT_SETTINGS_WINDOW_W - 110, gs.UIConstants.OPTION_BUTTON_H],
      "params": {
        "actions": [],
        "max": 100,
        "write": (function() {
          return p.write;
        }),
        "read": (function() {
          return p.read;
        })
      }
    }
  ]
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEVBQUUsQ0FBQyxTQUFTLENBQUMsV0FBWSxDQUFBLHVCQUFBLENBQXpCLEdBQW9EO0VBQ2hELE1BQUEsRUFBUSxnQkFEd0M7RUFFaEQsV0FBQSxFQUFhLElBRm1DO0VBR2hELGFBQUEsRUFBZSxVQUhpQztFQUloRCxRQUFBLEVBQVUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLENBQVQsRUFBWSxDQUFaLENBSnNDO0VBS2hELFVBQUEsRUFBWTtJQUNSO01BQ0ksTUFBQSxFQUFRLFNBRFo7TUFFSSxNQUFBLEVBQVEsU0FBQTtlQUFHLENBQUMsQ0FBQztNQUFMLENBRlo7TUFHSSxRQUFBLEVBQVUsQ0FBQyxlQUFELENBSGQ7TUFJSSxPQUFBLEVBQVMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLEdBQVAsRUFBWSxFQUFFLENBQUMsV0FBVyxDQUFDLGVBQWYsR0FBaUMsRUFBN0MsQ0FKYjtNQUtJLFFBQUEsRUFBVSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sRUFBUCxFQUFXLENBQVgsQ0FMZDtLQURRLEVBUVI7TUFDSSxNQUFBLEVBQVEsV0FEWjtNQUVJLElBQUEsRUFBTSxTQUFBO2VBQUcsQ0FBQyxDQUFDO01BQUwsQ0FGVjtNQUdJLE9BQUEsRUFBUyxDQUFDLEVBQUQsRUFBSyxDQUFMLEVBQVEsRUFBRSxDQUFDLFdBQVcsQ0FBQyx3QkFBZixHQUEwQyxHQUFsRCxFQUF1RCxFQUFFLENBQUMsV0FBVyxDQUFDLGVBQXRFLENBSGI7TUFJSSxRQUFBLEVBQVU7UUFBRSxTQUFBLEVBQVcsRUFBYjtRQUFpQixLQUFBLEVBQU8sR0FBeEI7UUFBNkIsT0FBQSxFQUFTLENBQUMsU0FBQTtpQkFBRyxDQUFDLENBQUM7UUFBTCxDQUFELENBQXRDO1FBQW9ELE1BQUEsRUFBUSxDQUFDLFNBQUE7aUJBQUcsQ0FBQyxDQUFDO1FBQUwsQ0FBRCxDQUE1RDtPQUpkO0tBUlE7R0FMb0MiLCJzb3VyY2VzQ29udGVudCI6WyJ1aS5VaUZhY3RvcnkuY3VzdG9tVHlwZXNbXCJ1aS5TZXR0aW5nc01lbnVTbGlkZXJcIl0gPSB7XG4gICAgXCJ0eXBlXCI6IFwidWkuU3RhY2tMYXlvdXRcIixcbiAgICBcInNpemVUb0ZpdFwiOiB0cnVlLFxuICAgIFwib3JpZW50YXRpb25cIjogXCJ2ZXJ0aWNhbFwiLFxuICAgIFwibWFyZ2luXCI6IFsxMCwgMTAsIDAsIDBdLCBcbiAgICBcImNvbnRyb2xzXCI6IFtcbiAgICAgICAgeyBcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInVpLlRleHRcIiwgXG4gICAgICAgICAgICBcInRleHRcIjogLT4gcC5sYWJlbCxcbiAgICAgICAgICAgIFwic3R5bGVzXCI6IFtcInJlZ3VsYXJVSVRleHRcIl0sIFxuICAgICAgICAgICAgXCJmcmFtZVwiOiBbMCwgMCwgMjAwLCBncy5VSUNvbnN0YW50cy5PUFRJT05fQlVUVE9OX0ggLSA0MF0sXG4gICAgICAgICAgICBcIm1hcmdpblwiOiBbMCwgMCwgNTAsIDBdXG4gICAgICAgIH0sXG4gICAgICAgIHsgXG4gICAgICAgICAgICBcInR5cGVcIjogXCJ1aS5TbGlkZXJcIiwgXG4gICAgICAgICAgICBcImlkXCI6IC0+IHAuaWQsXG4gICAgICAgICAgICBcImZyYW1lXCI6IFs4MCwgMCwgZ3MuVUlDb25zdGFudHMuTEFZT1VUX1NFVFRJTkdTX1dJTkRPV19XIC0gMTEwLCBncy5VSUNvbnN0YW50cy5PUFRJT05fQlVUVE9OX0hdLCBcbiAgICAgICAgICAgIFwicGFyYW1zXCI6IHsgXCJhY3Rpb25zXCI6IFtdLCBcIm1heFwiOiAxMDAsIFwid3JpdGVcIjogKC0+IHAud3JpdGUpLCBcInJlYWRcIjogKC0+IHAucmVhZCkgfSBcbiAgICAgICAgfVxuICAgIF1cbn0iXX0=
//# sourceURL=Template_SettingsMenuSlider_165.js