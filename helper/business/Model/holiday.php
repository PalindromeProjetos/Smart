<?php

namespace iSterilization\Model;

/**
 * 
 * @Entity {"name":"holiday", "cache":"\\iSterilization\\Cache\\holiday", "event":"\\iSterilization\\Event\\holiday"}
 */
class holiday extends \Smart\Data\Model {

    /**
     * @Policy {"nullable":false}
     * @Column {"description":"", "strategy":"AUTO", "type":"integer", "policy":true}
     */
    private $id;

    /**
     * @Policy {"nullable":false, "default":"", "length":80}
     * @Column {"description":"", "type":"string", "policy":true}
     */
    private $description;

    /**
     * @Policy {"nullable":false, "default":"", "length":1}
     * @Column {"description":"", "type":"string", "policy":true}
     */
    private $holidaytype;

    /**
     * @Policy {"nullable":false, "default":""}
     * @Column {"description":"", "type":"date", "policy":true}
     */
    private $holidaydate;

    /**
     * @Policy {"nullable":true, "default":""}
     * @Column {"description":"", "type":"boolean", "policy":true}
     */
    private $isactive;

    /**
     * @return type integer
     */
    public function getId() {
        return $this->id;
    }

    /**
     * @param type $id
     * @return \iSterilization\Model\holiday
     */
    public function setId($id) {
        $this->id = $id;
        return $this;
    }

    /**
     * @return type string
     */
    public function getDescription() {
        return $this->description;
    }

    /**
     * @param type $description
     * @return \iSterilization\Model\holiday
     */
    public function setDescription($description) {
        $this->description = $description;
        return $this;
    }

    /**
     * @return type string
     */
    public function getHolidaytype() {
        return $this->holidaytype;
    }

    /**
     * @param type $holidaytype
     * @return \iSterilization\Model\holiday
     */
    public function setHolidaytype($holidaytype) {
        $this->holidaytype = $holidaytype;
        return $this;
    }

    /**
     * @return type date
     */
    public function getHolidaydate() {
        return $this->holidaydate;
    }

    /**
     * @param type $holidaydate
     * @return \iSterilization\Model\holiday
     */
    public function setHolidaydate($holidaydate) {
        $this->holidaydate = $holidaydate;
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
     * @return \iSterilization\Model\holiday
     */
    public function setIsactive($isactive) {
        $this->isactive = $isactive;
        return $this;
    }

}