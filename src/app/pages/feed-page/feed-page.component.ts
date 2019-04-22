import { BoardItem } from './../../class/board/board-item.class';
import { BoardItemComponent } from './../../components/board/board-item/board-item.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.css']
})
export class FeedPageComponent implements OnInit {

  feedList: BoardItem[] = [
    new BoardItem({ title: 'How to Button-mash Better in Smash Ultimate', content: 'The only thing less fun than losing in Super Smash Bros. Ultimate is getting buried.'}),
    new BoardItem({ title: 'Borderlands 3 PAX East reveal could bring some surprises', content: 'Borderlands fans might want to pay special attention to PAX East when it rolls around at the end of the month.'}),
    new BoardItem({ title: 'Bernie Sanders Kickoff Rally in Brooklyn', content: 'Sen. Bernie Sanders (I-Vt.) kicks off his 2020 campaign with a rally at Brooklyn College in New York on March 2.'}),
    new BoardItem({ title: 'Syrian Fighters Backed by US Advance on Two Fronts Against ISIS', content: 'Fighters with the US-backed force battling the Islamic State group in eastern Syria advanced on two fronts Saturday as the extremists used snipers and booby traps to slow the push on the last area they control, a spokesman for the group said.'}),
    new BoardItem({ title: 'How to Button-mash Better in Smash Ultimate', content: 'The only thing less fun than losing in Super Smash Bros. Ultimate is getting buried.'}),
    new BoardItem({ title: 'Borderlands 3 PAX East reveal could bring some surprises', content: 'Borderlands fans might want to pay special attention to PAX East when it rolls around at the end of the month.'}),
    new BoardItem({ title: 'Bernie Sanders Kickoff Rally in Brooklyn', content: 'Sen. Bernie Sanders (I-Vt.) kicks off his 2020 campaign with a rally at Brooklyn College in New York on March 2.'}),
    new BoardItem({ title: 'Syrian Fighters Backed by US Advance on Two Fronts Against ISIS', content: 'Fighters with the US-backed force battling the Islamic State group in eastern Syria advanced on two fronts Saturday as the extremists used snipers and booby traps to slow the push on the last area they control, a spokesman for the group said.'}),
    new BoardItem({ title: 'How to Button-mash Better in Smash Ultimate', content: 'The only thing less fun than losing in Super Smash Bros. Ultimate is getting buried.'}),
    new BoardItem({ title: 'Borderlands 3 PAX East reveal could bring some surprises', content: 'Borderlands fans might want to pay special attention to PAX East when it rolls around at the end of the month.'}),
    new BoardItem({ title: 'Bernie Sanders Kickoff Rally in Brooklyn', content: 'Sen. Bernie Sanders (I-Vt.) kicks off his 2020 campaign with a rally at Brooklyn College in New York on March 2.'}),
    new BoardItem({ title: 'Syrian Fighters Backed by US Advance on Two Fronts Against ISIS', content: 'Fighters with the US-backed force battling the Islamic State group in eastern Syria advanced on two fronts Saturday as the extremists used snipers and booby traps to slow the push on the last area they control, a spokesman for the group said.'})
  ]; 

  constructor() { }

  ngOnInit() {
  }

}
