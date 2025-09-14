import { useEffect, useState } from 'react'
import bg from '../assets/bg2.png'
import seperator_img from '../assets/seperator.png'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { db } from '../pages/data';
import { getContent } from '../pages/endpoint';

export default function Credits() {

  return (
    <>
    <div className="section_wrapper" id='credits'>
      <div className="credits_wrapper">
        <h1>CREDITS</h1>
        <img src={seperator_img} alt="" />
        <br />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Roles</th>
              <th>Email / Links</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lauren Batchelor</td>
              <td>Project Manager, 3D Modeler, 3D Texturer</td>
              <td><a href="mailto:lwbatchelor@outlook.com">lwbatchelor@outlook.com</a></td>
            </tr>
            <tr>
              <td>Dominic White</td>
              <td>Lead Programmer, Tool Programmer</td>
              <td><a href="mailto:Dominicleonardwhite@gmail.com">Dominicleonardwhite@gmail.com</a></td>
            </tr>
            <tr>
              <td>Elijah Gilbert</td>
              <td>Programmer, 3D Modeler</td>
              <td><a href="mailto:egilworkmail0@gmail.com">egilworkmail0@gmail.com</a></td>
            </tr>
            <tr>
              <td>Mohammad Kasem</td>
              <td>Programmer</td>
              <td><a href="mailto:kasemkas384@gmail.com">kasemkas384@gmail.com</a></td>
            </tr>
            <tr>
              <td>Kartik Punna</td>
              <td>3D Modeler</td>
              <td><a href="mailto:kartikpunna5@gmail.com">kartikpunna5@gmail.com</a></td>
            </tr>
            <tr>
              <td>Blair Rod</td>
              <td>Lead Design, Lead Engineer, 3D Modeler, Sound Design</td>
              <td><a href="mailto:blairhrod@gmail.com">blairhrod@gmail.com</a></td>
            </tr>
            <tr>
              <td>Roman Viravongsa</td>
              <td>3D Modeler</td>
              <td><a href="mailto:rviravongsa@gmail.com">rviravongsa@gmail.com</a></td>
            </tr>
            <tr>
              <td>Paul Wiriyanont</td>
              <td>2D Artist</td>
              <td><a href="mailto:pwiriyanont@gmail.com">pwiriyanont@gmail.com</a></td>
            </tr>
            <tr>
              <td>Patrick Wiriyanont</td>
              <td>Level Designer</td>
              <td><a href="mailto:patrickwiriyanont@gmail.com">patrickwiriyanont@gmail.com</a></td>
            </tr>
            <tr>
              <td>Bing Hao Chuah</td>
              <td>Programmer</td>
              <td><a href="mailto:xinghao6511@gmail.com">xinghao6511@gmail.com</a></td>
            </tr>
            <tr>
              <td>Aaron Jubil</td>
              <td>Programmer</td>
              <td><a href="mailto:aaron_jt05@hotmail.com">aaron_jt05@hotmail.com</a></td>
            </tr>
            <tr>
              <td>Areeba Javeria Kazi</td>
              <td>Character Designer / Modeler</td>
              <td><a href="mailto:areebajkk@hotmail.com">areebajkk@hotmail.com</a></td>
            </tr>
            <tr>
              <td>Xander Barbosa</td>
              <td>Composer</td>
              <td><a href="mailto:xanbar10@gmail.com">xanbar10@gmail.com</a></td>
            </tr>
            <tr>
              <td>Max Peace</td>
              <td>Composer / Sound Designer</td>
              <td><a href="mailto:MaxPeaceMusic@gmail.com">MaxPeaceMusic@gmail.com</a></td>
            </tr>
            <tr>
              <td>Tristan Lee Johnson</td>
              <td>Writer, Tech Artist</td>
              <td>
                <a href="mailto:johnson.tristanlee@gmail.com">johnson.tristanlee@gmail.com</a><br/>
                <a href="https://sites.google.com/view/tristanleejohnson" target="_blank">Portfolio</a> | 
                <a href="https://lordzx50.itch.io/" target="_blank">Itch.io</a>
              </td>
            </tr>
            <tr>
              <td>Kevin Nick Weerasekera</td>
              <td>Sound Design, 3D Modeler</td>
              <td><a href="mailto:fishmycap@gmail.com">fishmycap@gmail.com</a></td>
            </tr>
            <tr>
              <td>Raheeq Bhatti</td>
              <td>2D Artist, Level Designer</td>
              <td><a href="mailto:raheeqwasif@gmail.com">raheeqwasif@gmail.com</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}
