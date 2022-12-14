#!/usr/bin/perl 
$/ = "%%\n";
@ARGV = ('/home/steff007/junk/dick.txt') unless @ARGV;
srand;
rand($.) < 1 && ($adage = $_) while <>;
print $adage;
