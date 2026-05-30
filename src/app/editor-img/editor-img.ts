import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { provideTuiEditor, TuiEditor, TuiEditorSocket, TuiEditorTool } from '@taiga-ui/editor';
import { TuiRadioList, TuiTextarea } from '@taiga-ui/kit';
import { TuiTitle } from '@taiga-ui/core';

@Component({
  selector: 'app-editor-img',
  imports: [ReactiveFormsModule, TuiEditor, TuiEditorSocket, TuiRadioList, TuiTextarea, TuiTitle],
  templateUrl: './editor-img.html',
  styleUrl: './editor-img.css',
  providers: [provideTuiEditor({ image: true })],
})
export class EditorImg {
  readonly builtInTools = [
    TuiEditorTool.Undo,
    TuiEditorTool.Size,
    TuiEditorTool.Bold,
    TuiEditorTool.Link,
    TuiEditorTool.Img,
    TuiEditorTool.Clear,
  ];

  listType = [
    { id: 1, name: 'Редактор' },
    { id: 2, name: 'HTML' },
  ];

  protected readonly typeText = new FormControl({ value: this.listType[0], disabled: false });
  protected readonly text = new FormControl(
    `<p><a href="tel:89998887766">8 999 888 77 66</a></p><p><a href="mailto:mail@mail.ru">mail@mail.ru</a></p><p><a href="https://ya.ru" target="_blank" rel="noopener noreferrer nofollow"><span style="font-size: 15px;">ya</span></a></p><a target="_blank" rel="noopener noreferrer nofollow" href="https://taiga-ui.dev" style=""><img src="data:image/png;base64,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" alt="" title=""></a>`,
  );
}
