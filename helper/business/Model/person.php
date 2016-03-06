<?php

namespace iSterilization\Model;

/**
 * 
 * @Entity {"name":"person", "cache":"\\iSterilization\\Cache\\person", "event":"\\iSterilization\\Event\\person"}
 */
class person extends \Smart\Data\Model {

    /**
     * @Policy {"nullable":false}
     * @Column {"description":"", "strategy":"AUTO", "type":"integer", "policy":true}
     */
    private $id;

    /**
     * @Policy {"nullable":true, "default":""}
     * @Column {"description":"", "type":"integer", "policy":true}
     */
    private $parentid;

    /**
     * @Policy {"nullable":false, "default":"", "length":80}
     * @Column {"description":"", "type":"string", "policy":true}
     */
    private $name;

    /**
     * @Policy {"nullable":false, "default":"", "length":60}
     * @Column {"description":"", "type":"string", "policy":true}
     */
    private $shortname;

    /**
     * @Policy {"nullable":false, "default":"", "length":1}
     * @Column {"description":"", "type":"string", "policy":true}
     */
    private $typeperson;

    /**
     * @Policy {"nullable":true, "default":"", "length":80}
     * @Column {"description":"", "type":"string", "policy":true}
     */
    private $mainmail;

    /**
     * @Policy {"nullable":false, "default":"", "length":80}
     * @Column {"description":"", "type":"string", "policy":true}
     */
    private $address;

    /**
     * @Policy {"nullable":false, "default":"", "length":80}
     * @Column {"description":"", "type":"string", "policy":true}
     */
    private $addressneighborhood;

    /**
     * @Policy {"nullable":false, "default":"", "length":80}
     * @Column {"description":"", "type":"string", "policy":true}
     */
    private $addresscomplement;

    /**
     * @Policy {"nullable":false, "default":"", "length":8}
     * @Column {"description":"", "type":"string", "policy":true}
     */
    private $addresszipcode;

    /**
     * @Policy {"nullable":false, "default":"", "length":20}
     * @Column {"description":"", "type":"string", "policy":true}
     */
    private $addressnumber;

    /**
     * @Policy {"nullable":true, "default":"", "length":80}
     * @Column {"description":"", "type":"string", "policy":true}
     */
    private $addresslocality;

    /**
     * @Policy {"nullable":true, "default":"", "length":2}
     * @Column {"description":"", "type":"string", "policy":true}
     */
    private $addressfederationunit;

    /**
     * @Policy {"nullable":false, "default":"((1))"}
     * @Column {"description":"", "type":"boolean", "policy":true}
     */
    private $isactive;

    /**
     * @Policy {"nullable":false, "default":"", "length":20}
     * @Column {"description":"", "type":"string", "policy":true}
     */
    private $cnesnumber;

    /**
     * @Policy {"nullable":true, "default":"", "length":-1}
     * @Column {"description":"", "type":"string", "policy":true}
     */
    private $filedata;

    /**
     * @Policy {"nullable":true, "default":"", "length":-1}
     * @Column {"description":"", "type":"string", "policy":true}
     */
    private $fileinfo;

    /**
     * @return type integer
     */
    public function getId() {
        return $this->id;
    }

    /**
     * @param type $id
     * @return \iSterilization\Model\person
     */
    public function setId($id) {
        $this->id = $id;
        return $this;
    }

    /**
     * @return type integer
     */
    public function getParentid() {
        return $this->parentid;
    }

    /**
     * @param type $parentid
     * @return \iSterilization\Model\person
     */
    public function setParentid($parentid) {
        $this->parentid = $parentid;
        return $this;
    }

    /**
     * @return type string
     */
    public function getName() {
        return $this->name;
    }

    /**
     * @param type $name
     * @return \iSterilization\Model\person
     */
    public function setName($name) {
        $this->name = $name;
        return $this;
    }

    /**
     * @return type string
     */
    public function getShortname() {
        return $this->shortname;
    }

    /**
     * @param type $shortname
     * @return \iSterilization\Model\person
     */
    public function setShortname($shortname) {
        $this->shortname = $shortname;
        return $this;
    }

    /**
     * @return type string
     */
    public function getTypeperson() {
        return $this->typeperson;
    }

    /**
     * @param type $typeperson
     * @return \iSterilization\Model\person
     */
    public function setTypeperson($typeperson) {
        $this->typeperson = $typeperson;
        return $this;
    }

    /**
     * @return type string
     */
    public function getMainmail() {
        return $this->mainmail;
    }

    /**
     * @param type $mainmail
     * @return \iSterilization\Model\person
     */
    public function setMainmail($mainmail) {
        $this->mainmail = $mainmail;
        return $this;
    }

    /**
     * @return type string
     */
    public function getAddress() {
        return $this->address;
    }

    /**
     * @param type $address
     * @return \iSterilization\Model\person
     */
    public function setAddress($address) {
        $this->address = $address;
        return $this;
    }

    /**
     * @return type string
     */
    public function getAddressneighborhood() {
        return $this->addressneighborhood;
    }

    /**
     * @param type $addressneighborhood
     * @return \iSterilization\Model\person
     */
    public function setAddressneighborhood($addressneighborhood) {
        $this->addressneighborhood = $addressneighborhood;
        return $this;
    }

    /**
     * @return type string
     */
    public function getAddresscomplement() {
        return $this->addresscomplement;
    }

    /**
     * @param type $addresscomplement
     * @return \iSterilization\Model\person
     */
    public function setAddresscomplement($addresscomplement) {
        $this->addresscomplement = $addresscomplement;
        return $this;
    }

    /**
     * @return type string
     */
    public function getAddresszipcode() {
        return $this->addresszipcode;
    }

    /**
     * @param type $addresszipcode
     * @return \iSterilization\Model\person
     */
    public function setAddresszipcode($addresszipcode) {
        $this->addresszipcode = $addresszipcode;
        return $this;
    }

    /**
     * @return type string
     */
    public function getAddressnumber() {
        return $this->addressnumber;
    }

    /**
     * @param type $addressnumber
     * @return \iSterilization\Model\person
     */
    public function setAddressnumber($addressnumber) {
        $this->addressnumber = $addressnumber;
        return $this;
    }

    /**
     * @return type string
     */
    public function getAddresslocality() {
        return $this->addresslocality;
    }

    /**
     * @param type $addresslocality
     * @return \iSterilization\Model\person
     */
    public function setAddresslocality($addresslocality) {
        $this->addresslocality = $addresslocality;
        return $this;
    }

    /**
     * @return type string
     */
    public function getAddressfederationunit() {
        return $this->addressfederationunit;
    }

    /**
     * @param type $addressfederationunit
     * @return \iSterilization\Model\person
     */
    public function setAddressfederationunit($addressfederationunit) {
        $this->addressfederationunit = $addressfederationunit;
        return $this;
    }

    /**
     * @return type boolean
     */
    public function getIsactive() {
        return $this->isactive;
    }

    /**
     * @param type $isactive
     * @return \iSterilization\Model\person
     */
    public function setIsactive($isactive) {
        $this->isactive = $isactive;
        return $this;
    }

    /**
     * @return type string
     */
    public function getCnesnumber() {
        return $this->cnesnumber;
    }

    /**
     * @param type $cnesnumber
     * @return \iSterilization\Model\person
     */
    public function setCnesnumber($cnesnumber) {
        $this->cnesnumber = $cnesnumber;
        return $this;
    }

    /**
     * @return type string
     */
    public function getFiledata() {
        return $this->filedata;
    }

    /**
     * @param type $filedata
     * @return \iSterilization\Model\person
     */
    public function setFiledata($filedata) {
        $this->filedata = $filedata;
        return $this;
    }

    /**
     * @return type string
     */
    public function getFileinfo() {
        return $this->fileinfo;
    }

    /**
     * @param type $fileinfo
     * @return \iSterilization\Model\person
     */
    public function setFileinfo($fileinfo) {
        $this->fileinfo = $fileinfo;
        return $this;
    }

}