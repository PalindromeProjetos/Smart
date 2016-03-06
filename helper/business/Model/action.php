<?php

namespace iSterilization\Model;

/**
 * 
 * @Entity {"name":"action", "cache":"\\iSterilization\\Cache\\action", "event":"\\iSterilization\\Event\\action"}
 */
class action extends \Smart\Data\Model {

    /**
     * @Policy {"nullable":false}
     * @Column {"description":"", "strategy":"AUTO", "type":"integer", "policy":true}
     */
    private $id;

    /**
     * @Policy {"nullable":false, "default":"", "length":60}
     * @Column {"description":"", "type":"string", "policy":true}
     */
    private $directive;

    /**
     * @Policy {"nullable":false, "default":"", "length":80}
     * @Column {"description":"", "type":"string", "policy":true}
     */
    private $description;

    /**
     * @Policy {"nullable":false, "default":""}
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
     * @return \iSterilization\Model\action
     */
    public function setId($id) {
        $this->id = $id;
        return $this;
    }

    /**
     * @return type string
     */
    public function getDirective() {
        return $this->directive;
    }

    /**
     * @param type $directive
     * @return \iSterilization\Model\action
     */
    public function setDirective($directive) {
        $this->directive = $directive;
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
     * @return \iSterilization\Model\action
     */
    public function setDescription($description) {
        $this->description = $description;
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
     * @return \iSterilization\Model\action
     */
    public function setIsactive($isactive) {
        $this->isactive = $isactive;
        return $this;
    }

}