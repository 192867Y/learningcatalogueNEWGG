import React from 'react';
import { Link } from 'react-router-dom';
import { CardDeck, Col, Row } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';

kontolll

class CourseCard extends React.Component{
    constructor(){
        super();
        this.state = {
            courses:[
                {
                _id: 1,
                title: "MyCare: Designing Human-Centered Care Toolkit",
                courseCode: "00001",
                clinicalType: "Clinical",
                image: "http://via.placeholder.com/350x250",
                courseOverview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus elit in elit facilisis luctus. Cras congue maximus est quis dignissim. Nulla eu ante orci. Quisque fermentum purus ut dolor facilisis scelerisque. In gravida nibh nec euismod egestas. Nullam at tincidunt metus. Cras finibus velit non dictum molestie. Ut tincidunt ullamcorper pellentesque. Maecenas in magna et turpis tempus commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut suscipit odio sit amet risus viverra, nec finibus lectus luctus. Aliquam dapibus in nulla eu tristique.",
                preReguisite: "Aenean elementum, metus id sollicitudin pulvinar, est massa dapibus ex, ut viverra sem ex et enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla maximus efficitur nibh, imperdiet imperdiet est bibendum rhoncus. Vestibulum sodales id libero ut sodales. Curabitur vel lacinia purus, at volutpat nulla. Aenean a aliquam nulla, vitae dapibus elit. Curabitur congue turpis sed quam ornare interdum non sed dui. Integer eu odio eu felis lacinia sagittis ut et eros.",
                audience: "Nunc commodo elit sem, eu volutpat justo tempor quis. Pellentesque quis sem massa. Integer eget libero est. Fusce tortor sem, aliquet sed feugiat eget, aliquam eget ligula. In hendrerit mauris eros, nec egestas velit viverra sed. Proin maximus dolor a enim rhoncus mattis. Morbi vel lorem volutpat, commodo tortor a, consectetur risus. Maecenas non gravida mauris. Sed consequat finibus sem et hendrerit. Ut a nulla consectetur, hendrerit orci sollicitudin, ultricies nisl. Sed vel sem nulla.",
                modality: "F2F",
                duration: "1 Day x 3 Hrs",
                courseFee: 8
              },
              {
                _id: 2,
                title: "MyCare: Effective Job Training with Job Instruction (JI)",
                courseCode: "00002",
                clinicalType: "Clinical",
                image: "http://via.placeholder.com/350x250",
                courseOverview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus elit in elit facilisis luctus. Cras congue maximus est quis dignissim. Nulla eu ante orci. Quisque fermentum purus ut dolor facilisis scelerisque. In gravida nibh nec euismod egestas. Nullam at tincidunt metus. Cras finibus velit non dictum molestie. Ut tincidunt ullamcorper pellentesque. Maecenas in magna et turpis tempus commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut suscipit odio sit amet risus viverra, nec finibus lectus luctus. Aliquam dapibus in nulla eu tristique.",
                preReguisite: "Aenean elementum, metus id sollicitudin pulvinar, est massa dapibus ex, ut viverra sem ex et enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla maximus efficitur nibh, imperdiet imperdiet est bibendum rhoncus. Vestibulum sodales id libero ut sodales. Curabitur vel lacinia purus, at volutpat nulla. Aenean a aliquam nulla, vitae dapibus elit. Curabitur congue turpis sed quam ornare interdum non sed dui. Integer eu odio eu felis lacinia sagittis ut et eros.",
                audience: "Nunc commodo elit sem, eu volutpat justo tempor quis. Pellentesque quis sem massa. Integer eget libero est. Fusce tortor sem, aliquet sed feugiat eget, aliquam eget ligula. In hendrerit mauris eros, nec egestas velit viverra sed. Proin maximus dolor a enim rhoncus mattis. Morbi vel lorem volutpat, commodo tortor a, consectetur risus. Maecenas non gravida mauris. Sed consequat finibus sem et hendrerit. Ut a nulla consectetur, hendrerit orci sollicitudin, ultricies nisl. Sed vel sem nulla.",
                modality: "F2F",
                duration: "1 Day x 3 Hrs",
                courseFee: 10
              },
              {
                _id: 3,
                title: "MyCare: The Ant of Standardized Work (SW) for Consistency",
                courseCode: "00003",
                clinicalType: "Non-Clinical",
                image: "http://via.placeholder.com/350x250",
                courseOverview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus elit in elit facilisis luctus. Cras congue maximus est quis dignissim. Nulla eu ante orci. Quisque fermentum purus ut dolor facilisis scelerisque. In gravida nibh nec euismod egestas. Nullam at tincidunt metus. Cras finibus velit non dictum molestie. Ut tincidunt ullamcorper pellentesque. Maecenas in magna et turpis tempus commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut suscipit odio sit amet risus viverra, nec finibus lectus luctus. Aliquam dapibus in nulla eu tristique.",
                preReguisite: "Aenean elementum, metus id sollicitudin pulvinar, est massa dapibus ex, ut viverra sem ex et enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla maximus efficitur nibh, imperdiet imperdiet est bibendum rhoncus. Vestibulum sodales id libero ut sodales. Curabitur vel lacinia purus, at volutpat nulla. Aenean a aliquam nulla, vitae dapibus elit. Curabitur congue turpis sed quam ornare interdum non sed dui. Integer eu odio eu felis lacinia sagittis ut et eros.",
                audience: "Nunc commodo elit sem, eu volutpat justo tempor quis. Pellentesque quis sem massa. Integer eget libero est. Fusce tortor sem, aliquet sed feugiat eget, aliquam eget ligula. In hendrerit mauris eros, nec egestas velit viverra sed. Proin maximus dolor a enim rhoncus mattis. Morbi vel lorem volutpat, commodo tortor a, consectetur risus. Maecenas non gravida mauris. Sed consequat finibus sem et hendrerit. Ut a nulla consectetur, hendrerit orci sollicitudin, ultricies nisl. Sed vel sem nulla.",
                modality: "F2F",
                duration: "1 Day x 3 Hrs",
                courseFee: 15
              },
              {
                _id: 4,
                title: "MyCare: Introduction to Design Thinking",
                courseCode: "00004",
                clinicalType: "Clinical",
                image: "http://via.placeholder.com/350x250",
                courseOverview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus elit in elit facilisis luctus. Cras congue maximus est quis dignissim. Nulla eu ante orci. Quisque fermentum purus ut dolor facilisis scelerisque. In gravida nibh nec euismod egestas. Nullam at tincidunt metus. Cras finibus velit non dictum molestie. Ut tincidunt ullamcorper pellentesque. Maecenas in magna et turpis tempus commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut suscipit odio sit amet risus viverra, nec finibus lectus luctus. Aliquam dapibus in nulla eu tristique.",
                preReguisite: "Aenean elementum, metus id sollicitudin pulvinar, est massa dapibus ex, ut viverra sem ex et enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla maximus efficitur nibh, imperdiet imperdiet est bibendum rhoncus. Vestibulum sodales id libero ut sodales. Curabitur vel lacinia purus, at volutpat nulla. Aenean a aliquam nulla, vitae dapibus elit. Curabitur congue turpis sed quam ornare interdum non sed dui. Integer eu odio eu felis lacinia sagittis ut et eros.",
                audience: "Nunc commodo elit sem, eu volutpat justo tempor quis. Pellentesque quis sem massa. Integer eget libero est. Fusce tortor sem, aliquet sed feugiat eget, aliquam eget ligula. In hendrerit mauris eros, nec egestas velit viverra sed. Proin maximus dolor a enim rhoncus mattis. Morbi vel lorem volutpat, commodo tortor a, consectetur risus. Maecenas non gravida mauris. Sed consequat finibus sem et hendrerit. Ut a nulla consectetur, hendrerit orci sollicitudin, ultricies nisl. Sed vel sem nulla.",
                modality: "F2F",
                duration: "1 Day x 3 Hrs",
                courseFee: 7
              },
              {
                _id: 5,
                title: "MyCare: Start and Sustain the Environment",
                courseCode: "00005",
                clinicalType: "Non-Clinical",
                image: "http://via.placeholder.com/350x250",
                courseOverview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus elit in elit facilisis luctus. Cras congue maximus est quis dignissim. Nulla eu ante orci. Quisque fermentum purus ut dolor facilisis scelerisque. In gravida nibh nec euismod egestas. Nullam at tincidunt metus. Cras finibus velit non dictum molestie. Ut tincidunt ullamcorper pellentesque. Maecenas in magna et turpis tempus commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut suscipit odio sit amet risus viverra, nec finibus lectus luctus. Aliquam dapibus in nulla eu tristique.",
                preReguisite: "Aenean elementum, metus id sollicitudin pulvinar, est massa dapibus ex, ut viverra sem ex et enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla maximus efficitur nibh, imperdiet imperdiet est bibendum rhoncus. Vestibulum sodales id libero ut sodales. Curabitur vel lacinia purus, at volutpat nulla. Aenean a aliquam nulla, vitae dapibus elit. Curabitur congue turpis sed quam ornare interdum non sed dui. Integer eu odio eu felis lacinia sagittis ut et eros.",
                audience: "Nunc commodo elit sem, eu volutpat justo tempor quis. Pellentesque quis sem massa. Integer eget libero est. Fusce tortor sem, aliquet sed feugiat eget, aliquam eget ligula. In hendrerit mauris eros, nec egestas velit viverra sed. Proin maximus dolor a enim rhoncus mattis. Morbi vel lorem volutpat, commodo tortor a, consectetur risus. Maecenas non gravida mauris. Sed consequat finibus sem et hendrerit. Ut a nulla consectetur, hendrerit orci sollicitudin, ultricies nisl. Sed vel sem nulla.",
                modality: "F2F",
                duration: "1 Day x 3 Hrs",
                courseFee: 20
              },
              {
                _id: 6,
                title: "Identifying Waste and Polution in the City",
                courseCode: "00006",
                clinicalType: "Non-Clinical",
                image: "http://via.placeholder.com/350x250",
                courseOverview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus elit in elit facilisis luctus. Cras congue maximus est quis dignissim. Nulla eu ante orci. Quisque fermentum purus ut dolor facilisis scelerisque. In gravida nibh nec euismod egestas. Nullam at tincidunt metus. Cras finibus velit non dictum molestie. Ut tincidunt ullamcorper pellentesque. Maecenas in magna et turpis tempus commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut suscipit odio sit amet risus viverra, nec finibus lectus luctus. Aliquam dapibus in nulla eu tristique.",
                preReguisite: "Aenean elementum, metus id sollicitudin pulvinar, est massa dapibus ex, ut viverra sem ex et enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla maximus efficitur nibh, imperdiet imperdiet est bibendum rhoncus. Vestibulum sodales id libero ut sodales. Curabitur vel lacinia purus, at volutpat nulla. Aenean a aliquam nulla, vitae dapibus elit. Curabitur congue turpis sed quam ornare interdum non sed dui. Integer eu odio eu felis lacinia sagittis ut et eros.",
                audience: "Nunc commodo elit sem, eu volutpat justo tempor quis. Pellentesque quis sem massa. Integer eget libero est. Fusce tortor sem, aliquet sed feugiat eget, aliquam eget ligula. In hendrerit mauris eros, nec egestas velit viverra sed. Proin maximus dolor a enim rhoncus mattis. Morbi vel lorem volutpat, commodo tortor a, consectetur risus. Maecenas non gravida mauris. Sed consequat finibus sem et hendrerit. Ut a nulla consectetur, hendrerit orci sollicitudin, ultricies nisl. Sed vel sem nulla.",
                modality: "F2F",
                duration: "1 Day x 3 Hrs",
                courseFee: 10
              },
              {
                _id: 7,
                title: "MyCare: Designing Human-Centered Care Toolkit",
                courseCode: "00001",
                clinicalType: "Clinical",
                image: "http://via.placeholder.com/350x250",
                courseOverview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus elit in elit facilisis luctus. Cras congue maximus est quis dignissim. Nulla eu ante orci. Quisque fermentum purus ut dolor facilisis scelerisque. In gravida nibh nec euismod egestas. Nullam at tincidunt metus. Cras finibus velit non dictum molestie. Ut tincidunt ullamcorper pellentesque. Maecenas in magna et turpis tempus commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut suscipit odio sit amet risus viverra, nec finibus lectus luctus. Aliquam dapibus in nulla eu tristique.",
                preReguisite: "Aenean elementum, metus id sollicitudin pulvinar, est massa dapibus ex, ut viverra sem ex et enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla maximus efficitur nibh, imperdiet imperdiet est bibendum rhoncus. Vestibulum sodales id libero ut sodales. Curabitur vel lacinia purus, at volutpat nulla. Aenean a aliquam nulla, vitae dapibus elit. Curabitur congue turpis sed quam ornare interdum non sed dui. Integer eu odio eu felis lacinia sagittis ut et eros.",
                audience: "Nunc commodo elit sem, eu volutpat justo tempor quis. Pellentesque quis sem massa. Integer eget libero est. Fusce tortor sem, aliquet sed feugiat eget, aliquam eget ligula. In hendrerit mauris eros, nec egestas velit viverra sed. Proin maximus dolor a enim rhoncus mattis. Morbi vel lorem volutpat, commodo tortor a, consectetur risus. Maecenas non gravida mauris. Sed consequat finibus sem et hendrerit. Ut a nulla consectetur, hendrerit orci sollicitudin, ultricies nisl. Sed vel sem nulla.",
                modality: "F2F",
                duration: "1 Day x 3 Hrs",
                courseFee: 8
              },
              {
                _id: 8,
                title: "MyCare: Effective Job Training with Job Instruction (JI)",
                courseCode: "00002",
                clinicalType: "Clinical",
                image: "http://via.placeholder.com/350x250",
                courseOverview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus elit in elit facilisis luctus. Cras congue maximus est quis dignissim. Nulla eu ante orci. Quisque fermentum purus ut dolor facilisis scelerisque. In gravida nibh nec euismod egestas. Nullam at tincidunt metus. Cras finibus velit non dictum molestie. Ut tincidunt ullamcorper pellentesque. Maecenas in magna et turpis tempus commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut suscipit odio sit amet risus viverra, nec finibus lectus luctus. Aliquam dapibus in nulla eu tristique.",
                preReguisite: "Aenean elementum, metus id sollicitudin pulvinar, est massa dapibus ex, ut viverra sem ex et enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla maximus efficitur nibh, imperdiet imperdiet est bibendum rhoncus. Vestibulum sodales id libero ut sodales. Curabitur vel lacinia purus, at volutpat nulla. Aenean a aliquam nulla, vitae dapibus elit. Curabitur congue turpis sed quam ornare interdum non sed dui. Integer eu odio eu felis lacinia sagittis ut et eros.",
                audience: "Nunc commodo elit sem, eu volutpat justo tempor quis. Pellentesque quis sem massa. Integer eget libero est. Fusce tortor sem, aliquet sed feugiat eget, aliquam eget ligula. In hendrerit mauris eros, nec egestas velit viverra sed. Proin maximus dolor a enim rhoncus mattis. Morbi vel lorem volutpat, commodo tortor a, consectetur risus. Maecenas non gravida mauris. Sed consequat finibus sem et hendrerit. Ut a nulla consectetur, hendrerit orci sollicitudin, ultricies nisl. Sed vel sem nulla.",
                modality: "F2F",
                duration: "1 Day x 3 Hrs",
                courseFee: 10
              },
              {
                _id: 9,
                title: "MyCare: The Ant of Standardized Work (SW) for Consistency",
                courseCode: "00003",
                clinicalType: "Non-Clinical",
                image: "http://via.placeholder.com/350x250",
                courseOverview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus elit in elit facilisis luctus. Cras congue maximus est quis dignissim. Nulla eu ante orci. Quisque fermentum purus ut dolor facilisis scelerisque. In gravida nibh nec euismod egestas. Nullam at tincidunt metus. Cras finibus velit non dictum molestie. Ut tincidunt ullamcorper pellentesque. Maecenas in magna et turpis tempus commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut suscipit odio sit amet risus viverra, nec finibus lectus luctus. Aliquam dapibus in nulla eu tristique.",
                preReguisite: "Aenean elementum, metus id sollicitudin pulvinar, est massa dapibus ex, ut viverra sem ex et enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla maximus efficitur nibh, imperdiet imperdiet est bibendum rhoncus. Vestibulum sodales id libero ut sodales. Curabitur vel lacinia purus, at volutpat nulla. Aenean a aliquam nulla, vitae dapibus elit. Curabitur congue turpis sed quam ornare interdum non sed dui. Integer eu odio eu felis lacinia sagittis ut et eros.",
                audience: "Nunc commodo elit sem, eu volutpat justo tempor quis. Pellentesque quis sem massa. Integer eget libero est. Fusce tortor sem, aliquet sed feugiat eget, aliquam eget ligula. In hendrerit mauris eros, nec egestas velit viverra sed. Proin maximus dolor a enim rhoncus mattis. Morbi vel lorem volutpat, commodo tortor a, consectetur risus. Maecenas non gravida mauris. Sed consequat finibus sem et hendrerit. Ut a nulla consectetur, hendrerit orci sollicitudin, ultricies nisl. Sed vel sem nulla.",
                modality: "F2F",
                duration: "1 Day x 3 Hrs",
                courseFee: 15
              },
              {
                _id: 10,
                title: "MyCare: Introduction to Design Thinking",
                courseCode: "00004",
                clinicalType: "Clinical",
                image: "http://via.placeholder.com/350x250",
                courseOverview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus elit in elit facilisis luctus. Cras congue maximus est quis dignissim. Nulla eu ante orci. Quisque fermentum purus ut dolor facilisis scelerisque. In gravida nibh nec euismod egestas. Nullam at tincidunt metus. Cras finibus velit non dictum molestie. Ut tincidunt ullamcorper pellentesque. Maecenas in magna et turpis tempus commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut suscipit odio sit amet risus viverra, nec finibus lectus luctus. Aliquam dapibus in nulla eu tristique.",
                preReguisite: "Aenean elementum, metus id sollicitudin pulvinar, est massa dapibus ex, ut viverra sem ex et enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla maximus efficitur nibh, imperdiet imperdiet est bibendum rhoncus. Vestibulum sodales id libero ut sodales. Curabitur vel lacinia purus, at volutpat nulla. Aenean a aliquam nulla, vitae dapibus elit. Curabitur congue turpis sed quam ornare interdum non sed dui. Integer eu odio eu felis lacinia sagittis ut et eros.",
                audience: "Nunc commodo elit sem, eu volutpat justo tempor quis. Pellentesque quis sem massa. Integer eget libero est. Fusce tortor sem, aliquet sed feugiat eget, aliquam eget ligula. In hendrerit mauris eros, nec egestas velit viverra sed. Proin maximus dolor a enim rhoncus mattis. Morbi vel lorem volutpat, commodo tortor a, consectetur risus. Maecenas non gravida mauris. Sed consequat finibus sem et hendrerit. Ut a nulla consectetur, hendrerit orci sollicitudin, ultricies nisl. Sed vel sem nulla.",
                modality: "F2F",
                duration: "1 Day x 3 Hrs",
                courseFee: 7
              },
              {
                _id: 11,
                title: "MyCare: Start and Sustain the Environment",
                courseCode: "00005",
                clinicalType: "Non-Clinical",
                image: "http://via.placeholder.com/350x250",
                courseOverview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus elit in elit facilisis luctus. Cras congue maximus est quis dignissim. Nulla eu ante orci. Quisque fermentum purus ut dolor facilisis scelerisque. In gravida nibh nec euismod egestas. Nullam at tincidunt metus. Cras finibus velit non dictum molestie. Ut tincidunt ullamcorper pellentesque. Maecenas in magna et turpis tempus commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut suscipit odio sit amet risus viverra, nec finibus lectus luctus. Aliquam dapibus in nulla eu tristique.",
                preReguisite: "Aenean elementum, metus id sollicitudin pulvinar, est massa dapibus ex, ut viverra sem ex et enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla maximus efficitur nibh, imperdiet imperdiet est bibendum rhoncus. Vestibulum sodales id libero ut sodales. Curabitur vel lacinia purus, at volutpat nulla. Aenean a aliquam nulla, vitae dapibus elit. Curabitur congue turpis sed quam ornare interdum non sed dui. Integer eu odio eu felis lacinia sagittis ut et eros.",
                audience: "Nunc commodo elit sem, eu volutpat justo tempor quis. Pellentesque quis sem massa. Integer eget libero est. Fusce tortor sem, aliquet sed feugiat eget, aliquam eget ligula. In hendrerit mauris eros, nec egestas velit viverra sed. Proin maximus dolor a enim rhoncus mattis. Morbi vel lorem volutpat, commodo tortor a, consectetur risus. Maecenas non gravida mauris. Sed consequat finibus sem et hendrerit. Ut a nulla consectetur, hendrerit orci sollicitudin, ultricies nisl. Sed vel sem nulla.",
                modality: "F2F",
                duration: "1 Day x 3 Hrs",
                courseFee: 20
              },
              {
                _id: 12,
                title: "Identifying Waste and Polution in the City",
                courseCode: "00006",
                clinicalType: "Non-Clinical",
                image: "http://via.placeholder.com/350x250",
                courseOverview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus elit in elit facilisis luctus. Cras congue maximus est quis dignissim. Nulla eu ante orci. Quisque fermentum purus ut dolor facilisis scelerisque. In gravida nibh nec euismod egestas. Nullam at tincidunt metus. Cras finibus velit non dictum molestie. Ut tincidunt ullamcorper pellentesque. Maecenas in magna et turpis tempus commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut suscipit odio sit amet risus viverra, nec finibus lectus luctus. Aliquam dapibus in nulla eu tristique.",
                preReguisite: "Aenean elementum, metus id sollicitudin pulvinar, est massa dapibus ex, ut viverra sem ex et enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla maximus efficitur nibh, imperdiet imperdiet est bibendum rhoncus. Vestibulum sodales id libero ut sodales. Curabitur vel lacinia purus, at volutpat nulla. Aenean a aliquam nulla, vitae dapibus elit. Curabitur congue turpis sed quam ornare interdum non sed dui. Integer eu odio eu felis lacinia sagittis ut et eros.",
                audience: "Nunc commodo elit sem, eu volutpat justo tempor quis. Pellentesque quis sem massa. Integer eget libero est. Fusce tortor sem, aliquet sed feugiat eget, aliquam eget ligula. In hendrerit mauris eros, nec egestas velit viverra sed. Proin maximus dolor a enim rhoncus mattis. Morbi vel lorem volutpat, commodo tortor a, consectetur risus. Maecenas non gravida mauris. Sed consequat finibus sem et hendrerit. Ut a nulla consectetur, hendrerit orci sollicitudin, ultricies nisl. Sed vel sem nulla.",
                modality: "F2F",
                duration: "1 Day x 3 Hrs",
                courseFee: 10
              }]
        }
    } 

    
    render(){
        const {courses} = this.state;
        return( 
            <Card  style={{display: 'flex', flexDirection: 'row', justifyContent: 'center',}}>
            <Link to ="/gg" >
                <CardDeck >
                    <br />
                    <Row xs={2} md={4} className="g-3">
                        {
                            courses.map((courses)=>{
                                return(
                                  <Col key={courses._id}>
                                    <div  className="col-md-6" style={{flex: 1, paddingLeft: "3px"}}>
                                        <div className="card bwm-card" style={{ width: '12rem' }}>

                                        <img 
                                        className="card-img-top" 
                                        src={courses.image}
                                        alt={courses.title} />

                                        <CardBody>
                                        <h6 className="card-title big-font">
                                            {courses.title}
                                        </h6>
                                        </CardBody>

                                        </div>
                                        
                                        <br />
                                        
                                    </div>
                                  </Col>

                                    
                                    
                                )
                            })
                        }
                        
                    </Row>
                </CardDeck>
            </Link>
            </Card>
        )
    }
}

export default CourseCard;